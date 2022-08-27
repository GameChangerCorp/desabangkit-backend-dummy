import { Router } from 'express'
import { Container } from 'instances-container'
import CooperationHandler from './handler'

export const CooperationAPI = (container: Container): Router => {
  const cooperationHandler = new CooperationHandler(container)
  const router = Router()

  router.get('/:cooperationId', cooperationHandler.getSpecificCooperationByIdHandler)
  return router
}
