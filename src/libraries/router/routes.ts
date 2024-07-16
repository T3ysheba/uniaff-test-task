import { lazy } from 'react'

import { ERoutePaths, TRoutePageType } from './types'

const Error = lazy(() => import('pages/Error'))
const Login = lazy(() => import('pages/Login'))

const routesList: TRoutePageType[] = [
  {
    element: Error,
    path: ERoutePaths.Error,
    title: 'Error',
  },

  {
    element: Login,
    path: ERoutePaths.Login,
    title: 'Login',
  },
]

export default routesList
