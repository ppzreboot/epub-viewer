import { Home } from './home'
import { Viewer } from './viewer'
import { Q } from './common'
import { retrieve_file } from './retrieve'

if ('serviceWorker' in navigator) {
  const reg = await navigator.serviceWorker.register('./sw.js')
  if (reg.active) {
    console.log('service worker is active')
    Viewer(
      Q('app') as HTMLDivElement,
      (
        await retrieve_file()
      ) ?? await Home(),
    )
  } else {
    console.error('It seems to be your first time to use this web app. service worker has not been active. reload!')
    location.reload()
  }
} else
  alert('Your environment dont support epub-viewer')
