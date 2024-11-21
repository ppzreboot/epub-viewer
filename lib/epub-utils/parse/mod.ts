import { I_epub, I_epub_files } from '../types'
import { parse_meta } from './meta'
import { parse_toc } from './toc'

export
const parse_epub = (files: I_epub_files): I_epub => {
  const meta = parse_meta(files)
  const toc = parse_toc(files, meta.manifest, meta.rootfile_dir)
  return { meta, toc }
}