import ProductCategory from '../entities/ProductCategory'

export interface ProductCategoryDto {
  id: string
  name: string
}

export default class ProductCategoryMapper {
  static toDto (productCategory: ProductCategory): ProductCategoryDto {
    const { id, name } = productCategory
    return { id: id.toString(), name }
  }
}
