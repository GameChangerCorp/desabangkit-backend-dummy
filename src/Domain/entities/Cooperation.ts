import { Entity } from '../../Common/shared/Entity'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'
import CooperationAddressVO, { CooperationAddress } from '../value-objects/CooperationAddress'

interface CooperationProps {
  name: string
  address: CooperationAddressVO
  memberUid: string

};

export default class Cooperation extends Entity<CooperationProps> {
  private readonly _name: string
  private readonly _address: CooperationAddressVO
  private readonly _memberUid: string

  private constructor (props: CooperationProps, id?: UniqueEntityId) {
    super(props, id)

    const { name, address, memberUid } = props
    this._name = name
    this._address = address
    this._memberUid = memberUid
  }

  static create (props: CooperationProps, id?: UniqueEntityId): Cooperation {
    return new Cooperation(props, id)
  }

  get name (): string {
    return this._name
  }

  get address (): CooperationAddress {
    return this._address.all
  }

  get memberUid (): string {
    return this._memberUid
  }
}
