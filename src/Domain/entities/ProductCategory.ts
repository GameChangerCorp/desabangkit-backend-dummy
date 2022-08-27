import { Entity } from '../../Common/shared/Entity'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'

interface ProductCategoryProps {
  name: string
};

export default class ProductCategory extends Entity<ProductCategoryProps> {
  private readonly _name: string

  private constructor (props: ProductCategoryProps, id?: UniqueEntityId) {
    super(props, id)
    this._name = props.name
  }

  static create (props: ProductCategoryProps, id?: UniqueEntityId): ProductCategory {
    return new ProductCategory(props, id)
  }

  get name (): string {
    return this._name
  }
}
