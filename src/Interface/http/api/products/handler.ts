import { Request, Response } from 'express'
import { Container } from 'instances-container'
import ProductUseCase from '../../../../Application/usecases/ProductUseCase'

export default class ProductHandler {
  private readonly _container: Container

  constructor (container: Container) {
    this._container = container
    this.getAllProductsHandler = this.getAllProductsHandler.bind(this)
  }

  async getAllProductsHandler (req: Request, res: Response): Promise<Response> {
    const { categoryId } = req.query as { categoryId?: string }
    const useCase: ProductUseCase = this._container.getInstance(ProductUseCase.name)
    const products = await useCase.getAllProducts(categoryId)

    return res.json({
      code: 200,
      message: 'success',
      data: {
        products
      }
    })
  }
}
