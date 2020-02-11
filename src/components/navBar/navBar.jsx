import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons/'


export const NavBar = () => {
   const classes = useStyles()

   return (
      <AppBar position="static" className={classes.appBarContainer}>
         <Toolbar>
            <IconButton edge='start' color='primary' aria-label='menu' >
               <Menu style={{fontSize:28}} />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
}

const useStyles = makeStyles(theme => ({
   appBarContainer: {
      margin: 0,
      padding: 0,
      boxShadow: '0 0 0 0 !important ',
      backgroundColor: 'white'
   }
}))
