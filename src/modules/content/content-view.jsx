import React, { Suspense, useEffect } from 'react';

import { makeStyles, Grid, CircularProgress } from '@material-ui/core'
import { NavBar, PrivateRoute } from '../../components';

import { routes } from '../../router'

export const Content = ({
  history
}, ...props) => {
  const classes = useStyles()

  useEffect(() => {
    history.push('/page')
  },[history])

  return (
    <Grid className={classes.container}>
      <NavBar />

      <Suspense fallback={<div className='centerLoading'><CircularProgress size={100} /></div>}>
        {
          routes.map((prop, key) => (
            <PrivateRoute
              key={key}
              path={prop.path}
              component={prop.component}
              {...prop}
            />
          ))
        }
      </Suspense>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  container:{
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column"
  }
}))