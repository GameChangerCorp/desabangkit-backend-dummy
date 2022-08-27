import { Request, Response, NextFunction } from 'express'

export default class Middleware {
  constructor () {
    this.errorHandler = this.errorHandler.bind(this)
  }

  errorHandler (err: Error, _: Request, res: Response, __: NextFunction): Response {
    console.log('res', err.message)
    const response: Response = res.status(500).json({
      code: 500,
      message: 'Maaf, terjadi kesalahan pada server kami.'
    })

    return response
  }
}
