import Cooperation from '../../Domain/entities/Cooperation'
import { ICooperationRepo } from '../../Domain/repositories/ICooperationRepo'
import CooperationMapper, { CooperationDto } from '../../Domain/mappers/CooperationMapper'
import CooperationModel from '../databases/mongodb/models/Cooperation'
import UniqueEntityId from '../../Common/shared/UniqueEntityId'
import CooperationAddressVO from '../../Domain/value-objects/CooperationAddress'

export default class CooperationRepo implements ICooperationRepo {
  async getSpecificCooperationById (cooperationId: string): Promise<CooperationDto> {
    const cooperationResult = await CooperationModel.findOne({ id: cooperationId })
    if (cooperationResult === null) throw new Error('COOPERATION_NOT_FOUND')
    const { id, name, address, memberUid } = cooperationResult
    const { street, latitude, longitude, village, district, city, province } = address
    const cooperationAddress = CooperationAddressVO.create({
      street, latitude, longitude, village, district, city, province
    })
    const cooperation = Cooperation.create({
      name,
      address: cooperationAddress,
      memberUid
    }, UniqueEntityId.create(id as string))
    return CooperationMapper.toDto(cooperation)
  }
}
