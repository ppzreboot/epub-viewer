import { I_epub_files } from '../types'
import { ua2str } from '../utils'

export
const verify_mimetype = (files: I_epub_files) =>
  ua2str(files.mimetype) === 'application/epub+zip'
