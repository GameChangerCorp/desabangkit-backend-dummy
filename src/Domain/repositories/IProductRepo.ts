import { ProductDto } from '../mappers/ProductMapper'

export interface IProductRepo {
  getAllProducts: (categoryId?: string) => Promise<ProductDto[]>
}
