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
    zoom: 18
  }


  componentDidMount() {
    FoursquareAPI.search().then(locations => {
      this.setState({
        locations
        // ,
        // fsLngLat: {
        //   lat: locations.location.lat,
        //   lng: locations.location.lng
        // }
      })
    })
  }

  renderMarkers(map, maps) {
    // let marker = 
    this.state.locations.map(location => {
      new maps.Marker({
        position: {
          lat: location.location.lat, 
          lng: location.location.lng
        },
        map,
        title: `${location.name}\n${location.location.formattedAddress}`
      })
    })
  }

  renderMarkersAll (location) {
    
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
          onGoogleApiLoaded={({map, maps}) => { this.renderMarkers(map, maps) }}
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