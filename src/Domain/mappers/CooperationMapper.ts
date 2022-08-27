import Cooperation from '../entities/Cooperation'
import { CooperationAddress } from '../value-objects/CooperationAddress'

export interface CooperationDto {
  id: string
  name: string
  address: CooperationAddress
  memberUid: string
}

export default class CooperationtMapper {
  static toDto (cooperation: Cooperation): CooperationDto {
    const { id, name, address, memberUid } = cooperation
    return {
      id: id.toString(),
      name,
      address,
      memberUid
    }
  }
}
