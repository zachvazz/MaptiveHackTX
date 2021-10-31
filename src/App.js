import { useState, useEffect, Component } from 'react';

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Marker from './components/Marker';
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

const AnyReactComponent = ({ text }) => <div style={{ position: "absolute" }}>{text}</div>;

function App() {

  const [location, setLocation] = useState({ lat: 0, lng: 0 })
  const [pins, setPins] = useState([
    { lat: 30.2830, lng: -97.7369, emoji: "🎉" },
    { lat: 30.281930, lng: -97.7344, emoji: "⚽" },
    { lat: 30.2, lng: -97.73, emoji: "🎉" },
  ]
)
  // const pins = 
    const classes = styles();

  navigator.geolocation.getCurrentPosition((pos) => {
    setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude })
    setPins(pins.concat([{lat: pos.coords.latitude, lng: pos.coords.longitude, emoji: "💻"},
  
    { lat: pos.coords.latitude + 0.00002, lng: pos.coords.longitude, emoji: "🎉" },
    { lat: pos.coords.latitude - 0.0004, lng: pos.coords.longitude, emoji: "⚽" },
    { lat: pos.coords.latitude + 0.0001, lng: pos.coords.longitude, emoji: "🎉" },
  ]))
  });


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
          {pins.map((pin, index) => {
            {/*console.log(pin)*/ }
            <p>Hello {index}</p>
          })}
          <div style={{ height: '100vh', width: '100%' }}>
            {console.log(pins)}
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultZoom={17}
              center={location}
            >
              {pins.map((pin, index) => {
                return <Marker
                  key={index}
                  lat={pin.lat}
                  lng={pin.lng}
                  text="Pin"
                  emoji={pin.emoji}
                />
              })}



            </GoogleMapReact>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
