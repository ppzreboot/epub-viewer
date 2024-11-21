import { Home } from './home'
import { Viewer } from './viewer'
import { Q } from './common'
import { retrieve_file } from './retrieve'

Viewer(
  Q('app'),
  (
    await retrieve_file()
  ) ?? await Home(),
)
