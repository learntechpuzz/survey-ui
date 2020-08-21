import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/styles';
import theme from './../../theme';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Header from './../header/Header';
import HomeImageEn from './../../assets/images/home_en.png'
import HomeImageAr from './../../assets/images/home_ar.png'
import content from './../../components/utils/ContentUtil';
import Survey from './Survey';
import { useLocation } from "react-router-dom";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
  formControl: {
    minWidth: 80
  },
  root: {
    maxWidth: 780,
  },
  media: {
    height: 200,
  },
});


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function Home() {
  let query = useQuery();
  const classes = useStyles();
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
          <Container className={classes.root}>
            <Header />
            <Card>
              <CardContent>
                <FormControl className={classes.formControl}>
                  <Select id="lang" value={lang} onChange={handleChangeLanguage}>
                    <MenuItem value="ltr">English</MenuItem>
                    <MenuItem value="rtl">العربية</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={content(HomeImageEn, HomeImageAr)}
                  title="home"
                />
              </CardActionArea>
              <CardContent>
                <Survey st={query.get("st")} />
              </CardContent>
            </Card>
          </Container>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default Home;
