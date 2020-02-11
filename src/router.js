import { lazy } from 'react'

import {ArrowLeftIcon} from './assets/arrow-left'

const Main = lazy(() => import('./modules/content/content-container'))

const Page = lazy(() => import('./modules/page/page-container'))

export const loginRoutes = [
  {path: '/', component: Main}
]

export const routes = [
  { path: '/page', component: Page, exact: true },
]

export const navRoutes = {
  'Admin': [
    {path: '/', name:'Main', icon: ArrowLeftIcon},
    { path: '/page', component: Page, exact: true },
  ]
}