export
interface I_manifest {
  id: string
  href: string
  // media_type: string
}

export
interface I_basic_meta {
  title?: string
  creator?: string
  publisher?: string
  date?: Date
  cover_id?: string
}

/** information defined in rootfile of epub */
export
interface I_epub_meta {
  basic: () => I_basic_meta
  manifest: () => I_manifest[]
  spine: () => string[]
}

export
type I_epub_files = Record<string, Uint8Array>
