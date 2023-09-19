import express, { Router } from 'express'

import { ServerOptions } from './server.interface'

export class Server {
  private readonly port: number
  private readonly routes: Router

  public readonly app = express()

  constructor(serverOption: ServerOptions) {
    const { port = 3000, routes } = serverOption

    this.port = port
    this.routes = routes
  }

  async start() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(this.routes)

    this.app.listen(this.port, () => {
      console.log(`Server is running ${this.port}`)
    })
  }
}
