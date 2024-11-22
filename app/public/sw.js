console.log('installing service worker')

self.addEventListener('fetch', evt => {
  const url = new URL(evt.request.url)
  console.log(url)
})
