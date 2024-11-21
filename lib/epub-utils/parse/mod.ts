import { I_epub, I_epub_files } from '../types'
import { verify_spine_in_manifest } from '../other'
import { parse_meta } from './meta'
import { parse_toc } from './toc'

export
const parse_epub = (files: I_epub_files): I_epub => {
  const meta = parse_meta(files)
  if (!verify_spine_in_manifest(meta))
    throw Error('items in spine is not included in manifest')
  const toc = parse_toc(files, meta.manifest, meta.rootfile_dir)
  return { meta, toc }
}