import { Request, Response } from 'express'
import { Container } from 'instances-container'
import ProductCategoryUseCase from '../../../../Application/usecases/ProductCategoryUseCase'

export default class ProductCategoryHandler {
  private readonly _container: Container

  constructor (container: Container) {
    this._container = container
    this.getAllProductCategoriesHandler = this.getAllProductCategoriesHandler.bind(this)
  }

  async getAllProductCategoriesHandler (_: Request, res: Response): Promise<Response> {
    const useCase: ProductCategoryUseCase = this._container.getInstance(ProductCategoryUseCase.name)
    const productCategories = await useCase.getAllProductCategories()

    return res.json({
      code: 200,
      message: 'success',
      data: {
        productCategories
      }
    })
  }
}
