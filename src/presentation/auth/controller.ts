import { Request, Response } from 'express'

export class AuthController {
  constructor() {}

  register = async (req: Request, res: Response) => {
    res.json('Register')
  }

  login = async (req: Request, res: Response) => {
    res.json('Login')
  }
}
