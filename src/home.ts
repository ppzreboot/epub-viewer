import { type Unzipped, unzipSync } from 'fflate'
import { E, Q, read_file } from './common'

export
function Home() {
  return new Promise<Unzipped>(resolve => {
    Q('local')!.onclick = async () => {
      // make use select a epub file
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
      // return the decompressed files
      const files = unzipSync(
        new Uint8Array(
          await file.arrayBuffer()
        )
      )
      // simple validate
      if (read_file(files.mimetype) === 'application/epub+zip')
        resolve(files)
      // remove `Home`
      Q('home').remove()
    }
  })
}
