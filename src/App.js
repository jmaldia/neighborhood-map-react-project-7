import React, { Component } from 'react';
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class App extends Component {
  state = {
    locations: []
  } 

  static defaultProps = {
    center: {
      lat: 40.8257712,
      lng: -74.1074718
    },
    zoom: 16.5
  }

  componentDidMount() {
    FoursquareAPI.search().then(locations => {
      this.setState({ locations })
    })
  }

  renderMarkers(map, maps) {
    this.state.locations.map(location => {
      return new maps.Marker({
        position: {
          lat: location.location.lat, 
          lng: location.location.lng
        },
        map,
        title: `${location.name}\n${location.location.formattedAddress}`
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>RutherFood</h3>
        </header>
        <p>Where to eat in Downtown Rutherford</p>
        
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: keys.googleMaps.APIkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => { this.renderMarkers(map, maps) }}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text=''
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;