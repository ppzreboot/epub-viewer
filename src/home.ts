import { unzipSync } from 'fflate'
import { E, Q } from './common'

export
function Home() {
  Q('local')!.onclick = async () => {
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
    const files = unzipSync(
      new Uint8Array(
        await file.arrayBuffer()
      ),
    )
    console.log({ files })
  }
}
