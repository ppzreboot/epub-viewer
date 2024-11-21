import { I_manifest_item, I_epub_files, I_TOC, I_nav_point } from '../types'
import { parse_xml, xml_attr } from '../utils'
import { join_path } from './path'

export
const parse_toc = (epub: I_epub_files, manifest: I_manifest_item[], dir: string): null | I_TOC => {
  const toc_path = manifest.find(m => m.id === 'ncx') // NCX: Navigation Control Xml
  if (!toc_path) return null

  const toc = parse_xml(epub[toc_path.href])
  const title = toc.querySelector('docTitle')?.querySelector('text')?.innerHTML

  return {
    title,
    list: Array.from(toc.querySelector('navMap')!.children)
      .map(point => parse_nav_point(point, dir))
  }
}

const parse_nav_point = (point: Element, dir: string): I_nav_point => {
  // @ts-ignore
  const node: I_nav_point = { children: [] }
  for (const child of point.children)
    switch (child.nodeName) {
      case 'navLabel':
        node.title = child.querySelector('text')!.innerHTML
        break
      case 'content':
        node.href = join_path(dir, xml_attr(child, 'src'))
        break
      case 'navPoint':
        node.children.push(parse_nav_point(child, dir))
    }
  return node
}