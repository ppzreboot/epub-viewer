import type { Unzipped } from 'fflate'
import { read_file } from '../../common'

export
const parse_rootfile = (files: Unzipped) =>
  new DOMParser().parseFromString(
    read_file(files['META-INF/container.xml']),
    'text/xml',
  )
    .querySelector('rootfile')!.attributes['full-path'].value
