import { envs } from './config'

import { Server } from './presentation/Server/server'
import { AppRoutes } from './presentation/routes'

const main = async () => {
  new Server({ port: envs.PORT, routes: AppRoutes.routes }).start()
}

;(() => main())()
