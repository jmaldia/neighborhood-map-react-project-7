import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

const AnyReactComponent = ({ text }) => <div>{text}</div>
let fsData = ''

class App extends Component {
  static defaultProps = {
    center: {
      lat: 40.8257712,
      lng: -74.1074718
    },
    zoom: 15
  }


  componentDidMount() {
    FoursquareAPI.search().then(data => console.log(data))
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: this.props.center,
      map,
      title: `----------`
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            RutherfordMap
          </p>
        </header>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.googleMaps.APIkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
          <AnyReactComponent
            lat={40.8257712}
            lng={-74.1074718}
            text={`${fsData.venues}`}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;