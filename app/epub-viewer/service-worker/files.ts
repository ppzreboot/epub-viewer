import { I_epub_files } from 'epub-utils'

export
class EpubManager {
  private prefix_list: string[] = []
  private map: Map<string, I_epub_files> = new Map()

  add(prefix: string, files: I_epub_files) {
    this.map.set(prefix, files)
    this.prefix_list.push(prefix)
  }
  remove(prefix: string) {
    this.prefix_list.splice(this.prefix_list.indexOf(prefix), 1)
    this.map.delete(prefix)
  }

  get_epub_file(url: URL) {
    const prefix = this.prefix_list.find(p => url.pathname.startsWith(p))
    if (prefix === undefined) return null

    const epub_files = this.map.get(prefix)!
    const epub_href = url.pathname.slice(prefix.length + 1)
    return {
      ua: epub_files[epub_href],
      type: parse_file_type(url.pathname),
    }
  }
}

type file_type = 'html' | 'unknown'
function parse_file_type(pathname: string): file_type {
  const suffix = pathname.split('.').at(-1)
  switch(suffix) {
    case 'html':
    case 'htm':
    case 'xhtml':
      return 'html'
    default:
      return 'unknown'
  }
}
