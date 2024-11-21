export
const ua2str = (ua: Uint8Array) =>
  new TextDecoder().decode(ua)

export
const parse_xml = (ua: Uint8Array) =>
  new DOMParser()
    .parseFromString(ua2str(ua), 'text/xml')

export
const xml_attr = (el: Element, name: string) => el.attributes[name].value
