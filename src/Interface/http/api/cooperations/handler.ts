import { Request, Response } from 'express'
import { Container } from 'instances-container'
import CooperationUseCase from '../../../../Application/usecases/CooperationUseCase'

export default class CooperationHandler {
  private readonly _container: Container

  constructor (container: Container) {
    this._container = container
    this.getSpecificCooperationByIdHandler = this.getSpecificCooperationByIdHandler.bind(this)
  }

  async getSpecificCooperationByIdHandler (req: Request, res: Response): Promise<Response> {
    const { cooperationId } = req.params as { cooperationId: string }
    const useCase: CooperationUseCase = this._container.getInstance(CooperationUseCase.name)
    const cooperation = await useCase.getSpecificCooperationById(cooperationId)

    return res.json({
      code: 200,
      message: 'success',
      data: {
        ...cooperation
      }
    })
  }
}
