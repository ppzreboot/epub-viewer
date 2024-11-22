import { I_epub, make_url_by_id } from 'epub-utils'

export
function Mess(iframe: HTMLIFrameElement, epub: I_epub, base_url: string) { 
  iframe.src = make_url_by_id(first_id(epub), epub.meta.manifest, base_url)
  iframe.onload = () => {
    const doc = iframe.contentDocument!
    const css = doc.createElement('style')
    css.textContent = `
      html, body {
        margin: 0;
        padding: 0;
      }
      body {
        color: rgb(44, 36, 26);
        background: rgb(236, 223, 194);
        max-width: 50rem;
        padding: 2rem;
        margin: 0 auto;
      }
      p {
        margin: .8em 0;
        line-height: 1.8;
      }
      img {
        max-height: 100%;
        max-width: 100%;
      }
    `
    doc.head.appendChild(css)
  }
}

function first_id(epub: I_epub): string {
  const toc = epub.meta.guide.toc?.href
  return toc
    && epub.meta.manifest.find(m => m.href === toc)?.id
    || epub.meta.spine[0]
}
