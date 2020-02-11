import React, { PureComponent, Suspense } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
// Central router
import { loginRoutes/*, navRoutes*/ } from './router'
// Theme Global Variables
import theme from './theme'

const history = createBrowserHistory()

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            {/* <NavBarComponent pages={navRoutes} history={history} /> */}
            <Suspense fallback={<CircularProgress size={100} />}>
              <Switch>
                {loginRoutes.map((prop, key) => (
                  <Route
                    path={prop.path}
                    key={key}
                    component={prop.component}
                    {...prop}
                  />
                ))}
              </Switch>
            </Suspense>
          </Router>
        </ThemeProvider>
        {/** Alert Global */}
        {/* <Alert /> */}
      </Provider>
    )
  }
}
