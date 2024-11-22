import type { Unzipped } from 'fflate'
import { parse_epub } from 'epub-utils'
import { Mess } from './mess'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  const epub = parse_epub(files)
  const base_url = make_base_url()

  navigator.serviceWorker.controller!.postMessage({
    type: 'new epub',
    base_url,
    files,
  })

  setTimeout(() => {
    const iframe = document.createElement('iframe')
    Mess(iframe, epub, base_url)
    container.appendChild(iframe)
  }, 50)
}

const make_base_url = () => {
  const lp = location.pathname
  const slash = lp.at(-1) === '/' ? '' : '/'
  return lp + slash + crypto.randomUUID()
}
