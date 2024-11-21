export
const Q = document.getElementById.bind(document)

export
const E = document.createElement.bind(document)

export
function read_file(file?: Uint8Array) {
  if (file === undefined)
    throw Error('non-exist file')
  return new TextDecoder().decode(file)
}
