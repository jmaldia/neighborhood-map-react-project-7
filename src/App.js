import React, { Component } from 'react';
import SideBar from './components/SideBar'
import LocationViewModal from './components/LocationViewModal'
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

const AnyReactComponent = ({ text }) => <div>{text}</div>
let marker

class App extends Component {
  state = {
    locations: [], 
    showModalBool: false,
    photoSrc: ''
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
        FoursquareAPI.getPhoto(location.id)
          .then(photoURL => {
            location.photoSrc = photoURL
            this.setState((prevState) => ({
                locations: prevState.locations.filter(filteredLocations => filteredLocations.id !== location.id).concat([location])
            }))
          })
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

      // marker.addListener('click', () => {
      //   if (marker.getAnimation() !== null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(maps.Animation.BOUNCE);
      //   }
      // })

      return marker
    })
  }

  showModal() {
    this.setState({ showModalBool: true })
    console.log(this.state.showModalBool);
  }

  render() {
    return (
      <div className="App">
        {this.state.showModalBool && <LocationViewModal locations={this.state.locations} />}

        <header className="App-header">
          <h3>RutherFood</h3>
        </header>
      
        <SideBar 
          locations={this.state.locations}
          photo={this.state.photoSrc}
          click={this.showModal}
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