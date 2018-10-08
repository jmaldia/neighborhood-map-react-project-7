import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD2Ow6iH0zHR4v1KFvp96IS2owFoYTWta0' }}
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