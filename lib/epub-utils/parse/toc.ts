import { I_manifest_item, I_epub_files, I_TOC } from '../types'
import { parse_xml } from '../utils'

export
const parse_toc = (epub: I_epub_files, manifest: I_manifest_item[]): null | I_TOC => {
  const toc_path = manifest.find(m => m.id === 'ncx') // NCX: Navigation Control Xml
  if (!toc_path) return null

  const toc = parse_xml(epub[toc_path.href])
  const title = toc.querySelector('docTitle')?.querySelector('text')?.innerHTML

  return {
    title,
    // list: toc.querySelector('navMap')
  }
}
