import { ua2str } from './utils'
import { I_epub_meta, I_epub_files, I_manifest } from './types'

export
const verify_mimetype = (files: I_epub_files) =>
  ua2str(files.mimetype) === 'application/epub+zip'

export
const verify_spine_in_manifest = (meta: I_epub_meta) =>
  meta.spine.every(
    chapter =>
      meta.manifest.find(resource => resource.id === chapter)
  )

export
const make_url_by_id = (id: string, manifest: I_manifest) =>
  manifest.find(item => item.id === id)!.href
