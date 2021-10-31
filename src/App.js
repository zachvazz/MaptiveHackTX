import { useState } from 'react';

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import GoogleMapReact from 'google-map-react';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {

  const [location, setLocation] = useState({lat: 30.28641499267145, lng: -97.73701995357007})
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Maptive
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="I'm Maptive" btnTitle="Host an Event" />
          <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="I'm Looking to get Maptive" btnTitle="Sign up" />
        </div>
        <div>
          {navigator.geolocation.getCurrentPosition(function (position) {
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDmX5pSlo9KB0m_5ZXsK9O5DH3mAk2akSU" }}
                defaultZoom={10}
                defaultCenter={{
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                }}
              >
              
              </GoogleMapReact>
            </div>
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          })
          }
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
