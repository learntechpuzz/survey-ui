import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/styles';
import theme from './assets/theme';
import { Typography, FormControl, Select, MenuItem } from '@material-ui/core';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const [lang, changeLanguage] = React.useState('ltr');
  const handleChangeLanguage = (event) => {
    let dir = event.target.value;
    changeLanguage(dir);
    document.querySelector("#root").setAttribute("dir", dir);
    theme.direction = dir;
}  
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <div>
        <FormControl>
          <Select id="lang" value={lang} onChange={ handleChangeLanguage }>
            <MenuItem value="ltr">English</MenuItem>
            <MenuItem value="rtl">Arabic</MenuItem>
          </Select>
        </FormControl>
        <Typography>Hello World!</Typography>  
      </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
