import React, { Component } from 'react';
import SideBar from './components/SideBar'
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

const AnyReactComponent = ({ text }) => <div>{text}</div>
let marker

class App extends Component {
  state = {
    locations: [], 
    // photoSrc: ''
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
      locations.forEach(location => {
        // console.log(location.id);
        FoursquareAPI.getPhoto(location.id)
          // this.state.locations.forEach(locationState => {
          //   if (location.id === locationState.id) {
          //     locationState.photoSrc = photos[0].prefix + '300x300' + photos[0].suffix
          //   }
          // })
          // this.setState({ 
          //   photoSrc: photos[0].prefix + '300x300' + photos[0].suffix
          // })
        // })

      })
    })
  }

  renderMarkers(map, maps) {
    this.state.locations.map(location => {
       marker = new maps.Marker({
        position: {
          lat: location.location.lat, 
          lng: location.location.lng
        },
        map,
        animation: maps.Animation.DROP,
        title: `${location.name}\n${location.location.formattedAddress}`
      })

      marker.addListener('click', () => {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(maps.Animation.BOUNCE);
        }
      })
      return marker
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>RutherFood</h3>
        </header>
      
        <SideBar 
          locations={this.state.locations}
          photo={this.state.photoSrc}
        />
        
        <GoogleMapReact
          className="Google-map"
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: keys.googleMaps.APIkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => { this.renderMarkers(map, maps) }}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;