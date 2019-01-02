import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('./containers/ProjectsList/ProjectsList')),
    path: '/projects',
    exact: true
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectCart/ProjectCart')
    ),
    path: '/projects/cart',
    exact: true
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectEmaily/ProjectEmaily')
    ),
    path: '/projects/emaily',
    exact: true
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectSmartBrain/ProjectSmartBrain')
    ),
    path: '/projects/smart-brain',
    exact: true
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectDevConnect/ProjectDevConnect')
    ),
    path: '/projects/dev-connect',
    exact: true
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectReactChat/ProjectReactChat')
    ),
    path: '/projects/react-chat',
    exact: true
  },
  {
    component: lazy(() => import('./containers/Portfolio/PortFolio')),
    path: '/',
    exact: true
  },
  {
    component: lazy(() => import('./containers/NotFound/NotFound')),
    path: ''
  }
]
