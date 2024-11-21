/** information defined in rootfile of epub */
export
interface I_epub_meta {
  title?: string
  creator?: string
  publisher?: string
  date?: Date
}

export
type I_epub_files = Record<string, Uint8Array>
