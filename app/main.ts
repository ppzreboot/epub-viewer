import { Home } from './home'
import { Viewer } from './viewer'
import { Q } from './common'
import { retrieve_file } from './retrieve'

if ('serviceWorker' in navigator) {
  const reg = await navigator.serviceWorker.register('./sw.js') // sw.js 在 /public/sw.js
  if (reg.active)
    Viewer(
      Q('app'),
      (
        await retrieve_file()
      ) ?? await Home(),
    )
} else
  alert('Your environment dont support')
