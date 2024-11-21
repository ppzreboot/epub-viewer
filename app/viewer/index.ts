import type { Unzipped } from 'fflate'
import { parse_toc, parse_meta } from 'epub-utils'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  console.debug(files)
  const meta = parse_meta(files)
  console.log('basic info', meta.basic())
  console.log('epub guide', meta.guide())
  const toc = parse_toc(files, meta.manifest())
  console.log('epub toc', toc)

}
