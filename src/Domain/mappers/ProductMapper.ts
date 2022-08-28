import Product from '../entities/Product'

export interface ProductDto {
  id: string
  sku: string
  category: string
  name: string
  unit: string
  price: string
  photoUrl: string
}

export default class ProductMapper {
  static toDto (product: Product): ProductDto {
    const { id, sku, category, name, unit, price, photoUrl } = product
    return {
      id: id.toString(),
      sku,
      category,
      name,
      unit,
      price,
      photoUrl
    }
  }
}
