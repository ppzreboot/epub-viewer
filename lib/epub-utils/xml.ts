import { ua2str } from './utils'

export
const parse_xml = (ua: Uint8Array) =>
  new DOMParser()
    .parseFromString(ua2str(ua), 'text/xml')

export
const xml_attr = (el: Element, name: string) => el.attributes[name].value
