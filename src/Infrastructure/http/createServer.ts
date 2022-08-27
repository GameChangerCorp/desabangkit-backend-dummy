import express, { Express } from 'express'
import cors from 'cors'
import Container from '../container'
import { CreateConnection } from '../databases/mongodb/createConnection'
import { ProductCategoryAPI } from '../../Interface/http/api/productCategories'
import { ProductAPI } from '../../Interface/http/api/products'
import Middleware from './middlewares'
require('express-async-errors')

export const createServer = async (container: typeof Container): Promise<Express> => {
  await CreateConnection()
  const server = express()
  const middleware = new Middleware()
  server.use(cors())
  server.use(express.json())

  server.use('/product-categories', ProductCategoryAPI(container))
  server.use('/products', ProductAPI(container))
  server.use(middleware.errorHandler)
  return server
}
