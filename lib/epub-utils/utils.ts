export
const ua2str = (ua: Uint8Array) =>
  new TextDecoder().decode(ua)
