import { I_epub_meta } from '../types'

export
const spine_in_manifest = (meta: I_epub_meta) =>
  meta.spine.every(
    chapter =>
      meta.manifest.find(resource => resource.id === chapter)
  )
