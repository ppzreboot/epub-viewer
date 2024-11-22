import type { Unzipped } from 'fflate'
import { parse_epub, make_url_by_id } from 'epub-utils'

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
    
    iframe.src = make_url_by_id(epub.meta.spine[0], epub.meta.manifest, base_url)
    container.appendChild(iframe)
  }, 2000)
}

const make_base_url = () => {
  const lp = location.pathname
  const slash = lp.at(-1) === '/' ? '' : '/'
  return lp + slash + crypto.randomUUID()
}
