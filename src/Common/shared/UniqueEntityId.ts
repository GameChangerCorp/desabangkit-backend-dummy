import { v4 as uuidv4 } from 'uuid'

export default class UniqueEntityId {
  private readonly _uuid: string

  private constructor (id?: string) {
    this._uuid = id ?? uuidv4()
  }

  static create (id?: string): UniqueEntityId {
    return new UniqueEntityId(id)
  }

  toString (): string {
    return this._uuid
  }

  equals (object: UniqueEntityId): boolean {
    return this._uuid === object._uuid
  }
}
