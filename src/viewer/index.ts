import type { Unzipped } from 'fflate'
import { parse_rootfile } from './parse/rootfile'

export
function Viewer(container: HTMLDivElement, files: Unzipped) {
  console.debug(files)
  const root_file_path = parse_rootfile(files)
}
