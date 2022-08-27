import { ProductCategoryDto } from '../mappers/ProductCategoryMapper'

export interface IProductCategoryRepo {
  getAllProductCategories: () => Promise<ProductCategoryDto[]>
}
