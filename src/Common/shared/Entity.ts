import UniqueEntityId from './UniqueEntityId'

export abstract class Entity<T> {
  protected readonly _props: T
  protected readonly _id: UniqueEntityId

  constructor (props: T, id?: UniqueEntityId) {
    this._props = props
    this._id = id ?? UniqueEntityId.create()
  }

  get id (): UniqueEntityId {
    return this._id
  }

  equals (object?: Entity<T>): boolean {
    if (object === undefined) {
      return false
    }

    return this._id.equals(object._id)
  }
}
