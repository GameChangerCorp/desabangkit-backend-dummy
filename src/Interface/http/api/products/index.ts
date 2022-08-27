import { Router } from 'express'
import { Container } from 'instances-container'
import ProductHandler from './handler'

export const ProductAPI = (container: Container): Router => {
  const productHandler = new ProductHandler(container)
  const router = Router()

  router.get('/', productHandler.getAllProductsHandler)
  return router
}
