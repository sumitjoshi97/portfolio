import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('./containers/ProjectsList/ProjectsList')),
    path: '/projects'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectCart/ProjectCart')
    ),
    path: '/projects/cart'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectEmaily/ProjectEmaily')
    ),
    path: '/projects/emaily'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectSmartBrain/ProjectSmartBrain')
    ),
    path: '/projects/smart-brain'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectBurger/ProjectBurger')
    ),
    path: '/projects/burger'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectDevConnect/ProjectDevConnect')
    ),
    path: '/projects/dev-connect'
  },
  {
    component: lazy(() =>
      import('./containers/ProjectsList/ProjectReactChat/ProjectReactChat')
    ),
    path: '/projects/react-chat'
  },
  {
    component: lazy(() => import('./containers/Portfolio/PortFolio')),
    path: '/'
  }
]
