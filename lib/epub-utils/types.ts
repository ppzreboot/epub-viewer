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

export
interface I_guide {
  title: string
  href: string
}
/** 一些特殊页面 */
export
interface I_guides {
  /** 目录页 */
  toc?: I_guide
  /** 封皮页 */
  cover?: I_guide
}

/** information defined in rootfile of epub */
export
interface I_epub_meta {
  basic: () => I_basic_meta
  manifest: () => I_manifest[]
  spine: () => string[]
  guide: () => I_guides
}

export
type I_epub_files = Record<string, Uint8Array>
