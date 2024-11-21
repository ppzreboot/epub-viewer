import { parse_xml, xml_attr } from '../utils'
import { I_epub_files, I_epub_meta, I_manifest } from '../types'

export
const parse_meta = (epub: I_epub_files): I_epub_meta => {
  const container = parse_xml(epub['META-INF/container.xml'])
  const rootfile_path = xml_attr(container.querySelector('rootfile')!, 'full-path')
  const rootfile = parse_xml(epub[rootfile_path])

  const basic = rootfile.querySelector('metadata')!
  return {
    title: basic.querySelector('title')?.innerHTML,
    creator: basic.querySelector('creator')?.innerHTML,
    publisher: basic.querySelector('publisher')?.innerHTML,
    date: (() => {
      const date = basic.querySelector('date')?.innerHTML
      if (date)
        return new Date(date)
    })(),
    manifest: parse_manifest(rootfile.querySelector('manifest')!),
  }
}

const parse_manifest = (el: Element): I_manifest[] =>
  Array.from(el.children).map(item => ({
    id: xml_attr(item, 'id'),
    href: xml_attr(item, 'href'),
  }))
