import { Router } from 'express'
import { Container } from 'instances-container'
import ProductCategoryHandler from './handler'

export const ProductCategoryAPI = (container: Container): Router => {
  const productCategoryHandler = new ProductCategoryHandler(container)
  const router = Router()

  router.get('/', productCategoryHandler.getAllProductCategoriesHandler)
  return router
}
