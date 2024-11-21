import type { Unzipped } from 'fflate'
import { parse_meta } from 'epub-utils'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  console.debug(files)
  const meta = parse_meta(files)
  console.log({ meta })
}
