import { IProductCategoryRepo } from '../../Domain/repositories/IProductCategoryRepo'
import { ProductCategoryDto } from '../../Domain/mappers/ProductCategoryMapper'

export default class ProductCategoryUseCase {
  constructor (
    private readonly _repo: IProductCategoryRepo
  ) {}

  async getAllProductCategories (): Promise<ProductCategoryDto[]> {
    return await this._repo.getAllProductCategories()
  }
}
