import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class App extends Component {
  state = {
    locations: [], 
    fsLngLat: {
      lat: '',
      lng: ''
    }
  } 

  static defaultProps = {
    center: {
      lat: 40.8257712,
      lng: -74.1074718
    },
    zoom: 15
  }


  componentDidMount() {
    FoursquareAPI.search().then(locations => {
      this.setState({
        locations,
        fsLngLat: {
          lat: locations[2].location.lat,
          lng: locations[2].location.lng
        }
      })
      console.log(locations[2].location.lng)
    })
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: this.state.fsLngLat,
      map,
      title: `${this.state.locations[2].name}\n${this.state.locations[2].location.formattedAddress}`
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
            text={`Rutherford, NJ`}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;