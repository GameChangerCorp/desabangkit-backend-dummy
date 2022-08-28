import { Entity } from '../../Common/shared/Entity'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'
import ProductCategory from './ProductCategory'

interface ProductProps {
  sku: string
  category: ProductCategory
  name: string
  unit: string
  price: string
  photoUrl: string
};

export default class Product extends Entity<ProductProps> {
  private readonly _sku: string
  private readonly _category: ProductCategory
  private readonly _name: string
  private readonly _unit: string
  private readonly _price: string
  private readonly _photoUrl: string

  private constructor (props: ProductProps, id?: UniqueEntityId) {
    super(props, id)

    const { sku, category, name, unit, price, photoUrl } = props
    this._sku = sku
    this._category = category
    this._name = name
    this._unit = unit
    this._price = price
    this._photoUrl = photoUrl
  }

  static create (props: ProductProps, id?: UniqueEntityId): Product {
    return new Product(props, id)
  }

  get sku (): string {
    return this._sku
  }

  get category (): string {
    return this._category.name
  }

  get name (): string {
    return this._name
  }

  get unit (): string {
    return this._unit
  }

  get price (): string {
    return this._price
  }

  get photoUrl (): string {
    return this._photoUrl
  }
}
