import * as dotenv from 'dotenv'
dotenv.config({ path: `${process.cwd()}/.env` })

const NODE_ENV = process.env.NODE_ENV
const PORT = String(process.env.PORT)
const MONGODB_URI = NODE_ENV !== 'development'
  ? NODE_ENV !== 'test'
    ? String(process.env.MONGODB_URI_PROD)
    : String(process.env.MONGODB_URI_TEST)
  : String(process.env.MONGODB_URI_DEV)

export {
  NODE_ENV,
  PORT,
  MONGODB_URI
}
