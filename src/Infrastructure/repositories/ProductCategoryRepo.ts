import ProductCategory from '../../Domain/entities/ProductCategory'
import { IProductCategoryRepo } from '../../Domain/repositories/IProductCategoryRepo'
import ProductCategoryMapper, { ProductCategoryDto } from '../../Domain/mappers/ProductCategoryMapper'
import ProductCategoryModel from '../databases/mongodb/models/ProductCategory'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'

export default class ProductCategoryRepo implements IProductCategoryRepo {
  async getAllProductCategories (): Promise<ProductCategoryDto[]> {
    const productCategories = await ProductCategoryModel.find({})
    return productCategories.map(({ id, name }) => {
      const productCategory = ProductCategory.create({ name }, UniqueEntityId.create(id))
      return ProductCategoryMapper.toDto(productCategory)
    })
  }
}
