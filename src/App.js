import React, { Component } from 'react';
import SideBar from './components/SideBar'
import LocationViewModal from './components/LocationViewModal'
import './App.css';
import { keys } from './keys';
import GoogleMapReact from 'google-map-react'
import * as FoursquareAPI from './utils/FoursquareAPI'

let marker
const AnyReactComponent = ({ text }) => <div>{text}</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      markers: [],
      showModalBool: false,
      infoOn: [],
      photoSrc: ''
    } 

    this.showInfo = this.showInfo.bind(this)
    this.renderMarkers = this.renderMarkers.bind(this)
    this.clickNameToShowInfo = this.clickNameToShowInfo.bind(this)
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
            location.infoOn = false
            this.setState((prevState) => ({
                locations: prevState.locations.filter(filteredLocations => filteredLocations.id !== location.id).concat([location])
            }))
          })
      })  
    })
  }

  

  renderMarkers(map, maps) {
    let infowindow = new maps.InfoWindow()
    this.state.locations.forEach(location => {
      infowindow = {
        content: `<h1>${location.name}</h1>
                  <h3>${location.location.address}</h3>`
      }

      marker = new maps.Marker({
        position: {
          lat: location.location.lat, 
          lng: location.location.lng
        },
        map,
        animation: maps.Animation.DROP
      })

      marker.addListener(marker, 'click', (marker) => {
        infowindow.open(map, marker)

        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(maps.Animation.BOUNCE);
        }
      })

      marker.id = location.id

      this.setState((prevState) => ({
        markers: prevState.markers.filter(filteredMarkers => filteredMarkers.id !== marker.id).concat([marker])
      }))

      return marker
    })

    maps.event.addListener(map, 'click', function() {
      infowindow.close()
    })
  }

  clickNameToShowInfo(id) {
    this.state.markers.forEach(filteredMarker => {
      if (filteredMarker.id === id) {
        // filteredMarker.map.trigger(filteredMarker.id, 'click')
        console.log(filteredMarker)
        return filteredMarker.id
      }
    })
  }

  showInfo(location) {
    this.state.locations.forEach(locationHere => {
      if (locationHere.id === location.id) {
        location.infoOn = !location.infoOn
        this.clickNameToShowInfo(location.id)
      } else {
        locationHere.infoOn = false
      }
    })
    
    this.setState((prevState) => ({
        locations: prevState.locations
    }))
  }

  render() {
    return (
      <div className="App">
        {this.state.showModalBool && <LocationViewModal locations={this.state.locations} />}

        <header className="App-header">
          <h3 onClick={this.showInfo}>RutherFood</h3>
        </header>
      
        <SideBar 
          locations={this.state.locations}
          photo={this.state.photoSrc}
          showInfo={this.showInfo}
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