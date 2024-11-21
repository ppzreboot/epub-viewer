import type { Unzipped } from 'fflate'
import { parse_epub } from 'epub-utils'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  const epub = parse_epub(files)
  const base_url = crypto.randomUUID()

  navigator.serviceWorker.controller!.postMessage({
    type: 'new epub',
    files,
  })

  const iframe = document.createElement('iframe')
  iframe.src = base_url + '/' + epub.meta.spine[0]
  container.appendChild(iframe)
}
