import { PORT } from './Common/config'
import { createServer } from './Infrastructure/http/createServer'
import Container from './Infrastructure/container'
require('dotenv')

const start = async (): Promise<void> => {
  const server = await createServer(Container)
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}

start()
