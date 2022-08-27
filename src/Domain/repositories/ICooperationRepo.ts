import { CooperationDto } from '../mappers/CooperationMapper'

export interface ICooperationRepo {
  getSpecificCooperationById: (cooperationId: string) => Promise<CooperationDto>
}
