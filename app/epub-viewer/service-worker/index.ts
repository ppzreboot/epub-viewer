import { ua2str } from 'epub-utils'
import { EpubManager } from './files'

console.log('installing service worker')

const manager = new EpubManager()

self.addEventListener('message', message => {
  const data = message.data
  switch(data.type) {
    case 'new epub':
      console.log('adding new epub', data.base_url)
      manager.add(data.base_url, data.files)
      break
    default:
      throw Error('unrecognized service worker message')
  }
})

// @ts-ignore
self.addEventListener('fetch', (evt: FetchEvent) => {
  const url = new URL(evt.request.url)
  const file = manager.get_epub_file(url)
  if (!file) return

  console.log('intercepting http request', evt.request.url)
  switch (file.type) {
    case 'html':
      return evt.respondWith(
        new Response(ua2str(file.ua), {
          headers: { 'Content-Type': 'text/html' }
        })
      )
    default:
      return evt.respondWith(
        new Response(new Blob([file.ua]))
      )
  }
})
