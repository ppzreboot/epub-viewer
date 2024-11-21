export
interface I_manifest_item { // manifest 有列表的意思
  id: string
  href: string
  // media_type: string
}

export
type I_manifest = I_manifest_item[]

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
  rootfile_dir: string
  basic: I_basic_meta
  manifest: I_manifest_item[]
  spine: string[]
  guide: I_guides
}

export
type I_epub_files = Record<string, Uint8Array>

export
interface I_nav_point {
  title: string
  href: string
  children: I_nav_point[]
}

export
interface I_toc {
  title?: string
  list?: I_nav_point[]
}

export
interface I_epub {
  meta: I_epub_meta
  toc?: I_toc
}
