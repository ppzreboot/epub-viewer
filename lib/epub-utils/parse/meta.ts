import { parse_xml, xml_attr } from '../utils'
import { I_basic_meta, I_epub_files, I_epub_meta, I_guides, I_manifest_item } from '../types'
import { join_path } from './path'

export
const parse_meta = (epub: I_epub_files): I_epub_meta => {
  const container = parse_xml(epub['META-INF/container.xml'])
  const rootfile_path = xml_attr(container.querySelector('rootfile')!, 'full-path')
  const rootfile = parse_xml(epub[rootfile_path])
  const rootfile_dir = join_path(rootfile_path, '../') 
  return {
    basic: () => parse_basic(rootfile.querySelector('metadata')!),
    manifest: () => parse_manifest(rootfile.querySelector('manifest')!, rootfile_dir),
    spine: () => parse_spine(rootfile.querySelector('spine')!),
    guide: () => parse_guides(rootfile.querySelector('guide')!, rootfile_dir),
  }
}

const parse_guides = (el: Element, dir: string): I_guides => {
  const guilds: I_guides = {}
  for (const ref of el.children)
    guilds[xml_attr(ref, 'type')] = {
      title: xml_attr(ref, 'title'),
      href: join_path(dir, xml_attr(ref, 'href')),
    }
  return guilds
}

const parse_basic = (el: Element): I_basic_meta => ({
  title: el.querySelector('title')?.innerHTML,
  creator: el.querySelector('creator')?.innerHTML,
  publisher: el.querySelector('publisher')?.innerHTML,
  date: (() => {
    const date = el.querySelector('date')?.innerHTML
    if (date)
      return new Date(date)
  })(),
  cover_id: (() => {
    const meta = Array.from(el.querySelectorAll('meta'))
      .find(meta => xml_attr(meta, 'name') === 'cover')
    return meta ? xml_attr(meta, 'content') : undefined
  })(),
})
const parse_manifest = (el: Element, dir: string): I_manifest_item[] =>
  Array.from(el.children).map(item => ({
    id: xml_attr(item, 'id'),
    href: join_path(xml_attr(item, 'href'), dir),
  }))

const parse_spine = (el: Element): string[] =>
  Array.from(el.children).map(item =>
    xml_attr(item, 'idref')
  )
