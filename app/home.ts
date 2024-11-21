import { type Unzipped, unzipSync } from 'fflate'
import { E, Q } from './common'
import { verify_mimetype } from 'epub-utils'

export
function Home() {
  return new Promise<Unzipped>(resolve => {
    Q('local')!.onclick = async () => {
      // make user select a epub file
      const file = await new Promise<File>(res => {
        const file_input = E('input')
        file_input.type = 'file'
        file_input.accept = '.epub'
        file_input.onchange = () => {
          const file = file_input.files![0]
          if (file)
            res(file)
        }
        file_input.click()
      })
      // decompresse files
      const files = unzipSync(
        new Uint8Array(
          await file.arrayBuffer()
        )
      )
      // simple validate and return files
      if (verify_mimetype(files))
        resolve(files)
      // remove `Home`
      Q('home').remove()
    }
  })
}
