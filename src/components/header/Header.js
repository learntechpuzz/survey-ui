import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import HeaderBackgroundImage from '../../assets/images/header.png'

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <img alt="header" src={HeaderBackgroundImage}></img>
      </AppBar>
    </div>
  );
}