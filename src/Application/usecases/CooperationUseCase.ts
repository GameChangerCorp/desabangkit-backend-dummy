import { ICooperationRepo } from '../../Domain/repositories/ICooperationRepo'
import { CooperationDto } from '../../Domain/mappers/CooperationMapper'

export default class CooperationUseCase {
  constructor (
    private readonly _repo: ICooperationRepo
  ) {}

  async getSpecificCooperationById (cooperationId: string): Promise<CooperationDto> {
    return await this._repo.getSpecificCooperationById(cooperationId)
  }
}
