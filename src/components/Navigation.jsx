import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const Navigation = ({ title }) => (
  <AppBar position="static">
    <Toolbar>
      {/* 
      <IconButton 
        edge="start"
        color="inherit" 
        aria-label="back"
      >
        <ChevronLeft />
      </IconButton>         
      */}
      <Typography variant="h6">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navigation;
