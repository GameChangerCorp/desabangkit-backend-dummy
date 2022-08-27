import { ValueObject } from '../../Common/shared/ValueObject'

export interface CooperationAddress {
  street: string
  latitude: string
  longitude: string
  village: string
  district: string
  city: string
  province: string
}

export default class CooperationAddressVO extends ValueObject<CooperationAddress> {
  private readonly _street: string
  private readonly _latitude: string
  private readonly _longitude: string
  private readonly _village: string
  private readonly _district: string
  private readonly _city: string
  private readonly _province: string

  private constructor (props: CooperationAddress) {
    super(props)
    const { street, latitude, longitude, village, district, city, province } = props
    this._street = street
    this._latitude = latitude
    this._longitude = longitude
    this._village = village
    this._district = district
    this._city = city
    this._province = province
  }

  static create (props: CooperationAddress): CooperationAddressVO {
    return new CooperationAddressVO(props)
  }

  get all (): CooperationAddress {
    return {
      street: this._street,
      latitude: this._latitude,
      longitude: this._longitude,
      village: this._village,
      district: this._district,
      city: this._city,
      province: this._province
    }
  }
}
