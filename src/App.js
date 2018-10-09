import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 40.8257712,
      lng: -74.1074718
    },
    zoom: 15
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            RutherfordMap
          </p>
        </header>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.googleMapsAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.8257712}
            lng={-74.1074718}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;