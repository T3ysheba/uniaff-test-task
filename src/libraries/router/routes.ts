import { lazy } from 'react'

import { ERoutePaths, TRoutePageType } from './types'

const Login = lazy(() => import('pages/Login'))

const routesList: TRoutePageType[] = [
  {
    element: Login,
    path: ERoutePaths.Login,
    title: 'Login',
  },
]

export default routesList
