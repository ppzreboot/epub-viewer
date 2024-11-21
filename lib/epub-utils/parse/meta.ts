import { parse_xml, xml_attr } from '../xml'
import { I_epub_files, I_epub_meta } from '../types'

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
  }
}
