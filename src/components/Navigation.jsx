import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const Navigation = ({ title, backRoute }) => (
  <AppBar position="static">
    <Toolbar>
      { 
        backRoute && (
          <IconButton 
            edge="start"
            color="inherit" 
            aria-label="back"
            component={RouterLink} 
            to={backRoute}            
          >
            <ChevronLeft />
          </IconButton>         
        )
      }      
      <Typography variant="h6">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navigation;
