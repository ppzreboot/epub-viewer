console.log('installing service worker')

const epubs = new Map()

self.addEventListener('message', message => {
  const data = message.data
  switch(data.type) {
    case 'new epub':
      console.log('adding new epub', data.base_url)
      epubs.set(data.base_url, data.files)
      break
    default:
      throw Error('unrecognized service worker message')
  }
})

self.addEventListener('fetch', evt => {
  const url = new URL(evt.request.url)
  for (const base_url of epubs.keys())
    if (url.pathname.startsWith(base_url)) {
      const requested = epubs.get(base_url)
      console.log({ requested })
      const resource = url.pathname.slice(base_url.length + 1)
      console.log('catch epub request', {
        pathname: url.pathname,
        resource,
      })

      console.log('requested string', new TextDecoder().decode(requested[resource]))
      return evt.respondWith(
        new Response(
          new TextDecoder().decode(requested[resource])
        )
      )
    }
  console.log('unintercepted request', url)
})
