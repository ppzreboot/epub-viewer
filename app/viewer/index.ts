import type { Unzipped } from 'fflate'
import { parse_epub } from 'epub-utils'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  console.debug(files)
  const now = new Date()
  const epub = parse_epub(files)
  console.log(`parsed in ${new Date().getTime() - now.getTime()}ms`)
  console.log(epub)
  const iframe = document.createElement('iframe')
  // iframe.src = 
}
