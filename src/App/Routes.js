import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('../views/ProjectView/MovieRolls')),
    path: '/projects/movie-rolls',
    exact: true,
  },
  {
    component: lazy(() => import('../views/ProjectView/Cart')),
    path: '/projects/cart',
    exact: true,
  },
  {
    component: lazy(() => import('../views/ProjectView/Emaily')),
    path: '/projects/emaily',
    exact: true,
  },
  {
    component: lazy(() => import('../views/ProjectView/SmartBrain')),
    path: '/projects/smart-brain',
    exact: true,
  },
  {
    component: lazy(() => import('../views/ProjectView/DevConnect')),
    path: '/projects/dev-connect',
    exact: true,
  },
  {
    component: lazy(() => import('../views/ProjectView/ReactChat')),
    path: '/projects/react-chat',
    exact: true,
  },
  // {
  //   component: lazy(() => import('../views/NotFound')),
  //   path: '',
  // },
]
