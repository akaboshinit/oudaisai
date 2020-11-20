import '../styles/globals.css'

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

import Link from 'next/link'
import makeStyles from '@material-ui/core/styles/makeStyles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Card from '@material-ui/core/Card';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Drawer from "@material-ui/core/Drawer"

const useStyles = makeStyles({
  drawer_top_card: {
      display:'grid',
      placeItems:'center',
      padding: '25px 0',
      minHeight: '48px',
  },
  drawer_card: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 16px',
      minHeight: '48px',
  }
});

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const classes = useStyles();
  const [isOpenDrawer, setDrawerState] = React.useState(false)

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>oudaisai-not-koushiki</title>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/earlyaccess/hannari.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/earlyaccess/kokoro.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Drawer
            anchor="left"
            open={isOpenDrawer}
            onClose={() => {
                setDrawerState(false)
            }}
        >
            <Card className={classes.drawer_top_card} style={{"background":"#C7C3E1"}} variant="outlined">
                <div>鴨台祭まとめ</div>
            </Card>

            <Link href="/a">
            <Card className={classes.drawer_card} variant="outlined">
              <li>TOP</li>
              <NavigateNextIcon color="action" />
            </Card>
            </Link>

            <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
              >
                  <div>生配信イベント</div>
              </AccordionSummary>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
              >
                  <div>配信イベント</div>
              </AccordionSummary>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
              >
                  <div>常設イベント</div>
              </AccordionSummary>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
              <AccordionDetails>
                  <div>aaaaaaaaaaaaaaaaaa</div>
              </AccordionDetails>
            </Accordion>
        </Drawer>

            <AppBar position="static" style={{"background":"#C7C3E1"}}>
                <Toolbar>
                    <IconButton onClick={()=>{setDrawerState(true)}} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        鴨台祭まとめ
                    </Typography>
                </Toolbar>
            </AppBar> */}

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};