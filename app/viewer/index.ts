import type { Unzipped } from 'fflate'
import { parse_toc, parse_meta } from 'epub-utils'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  console.debug(files)
  const meta = parse_meta(files)
  console.log(meta.basic())
  console.log(meta.guide())
  const toc = parse_toc(files, meta.manifest())
  console.log({ toc })

}
