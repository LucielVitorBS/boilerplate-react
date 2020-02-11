import { combineReducers } from 'redux'

import Content from '../modules/content/content-state'
import Page from '../modules/page/page-state'

export const reducers = {
  Content,
  Page
}

export default combineReducers(reducers)
