import { IProductRepo } from '../../Domain/repositories/IProductRepo'
import { ProductDto } from '../../Domain/mappers/ProductMapper'

export default class ProductUseCase {
  constructor (
    private readonly _repo: IProductRepo
  ) {}

  async getAllProducts (categoryId?: string): Promise<ProductDto[]> {
    return await this._repo.getAllProducts(categoryId)
  }
}
