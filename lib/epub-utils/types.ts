export
interface I_manifest {
  id: string
  href: string
  // media_type: string
}

/** information defined in rootfile of epub */
export
interface I_epub_meta {
  title?: string
  creator?: string
  publisher?: string
  date?: Date
  manifest: I_manifest[]
}

export
type I_epub_files = Record<string, Uint8Array>
