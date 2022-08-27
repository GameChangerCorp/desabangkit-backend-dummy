import ProductCategory from '../../Domain/entities/ProductCategory'
import Product from '../../Domain/entities/Product'
import { IProductRepo } from '../../Domain/repositories/IProductRepo'
import ProductMapper, { ProductDto } from '../../Domain/mappers/ProductMapper'
import ProductModel from '../databases/mongodb/models/Product'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'

export default class ProductRepo implements IProductRepo {
  async getAllProducts (categoryId?: string): Promise<ProductDto[]> {
    let filter = {}
    if (categoryId !== undefined) filter = { 'category.id': categoryId }

    const products = await ProductModel.find(filter)
    return products.map(({ id, sku, category, name, unit, price }) => {
      const productCategory = ProductCategory.create({ name: category.name }, UniqueEntityId.create(category.id))
      const product = Product.create({
        sku,
        category: productCategory,
        name,
        unit,
        price
      }, UniqueEntityId.create(id))
      return ProductMapper.toDto(product)
    })
  }
}
