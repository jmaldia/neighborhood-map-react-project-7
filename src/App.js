import React, { Component } from 'react';
import * as FoursquareAPI from './utils/FoursquareAPI'

import Menu from './components/Menu'
import GoogleMapComponent from './components/GoogleMapComponent'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      markers: []
    } 

    this.showInfo = this.showInfo.bind(this)
    this.clickMarker = this.clickMarker.bind(this)
    this.closeAllInfoWindow = this.closeAllInfoWindow.bind(this)
  }

  componentDidMount() {
    FoursquareAPI.search().then(searchResults => {
      // Creates an array or markers for the map
      const markers = searchResults.map(location => {
        return {
          id: location.id,
          name: location.name, 
          address: location.location.address,
          lat: location.location.lat, 
          lng: location.location.lng, 
          isOpen: false, 
          isVisible: true
        }
      })
      
      // Adds a photo URL to each location
      searchResults.forEach(location => {
        FoursquareAPI.getPhoto(location.id)
          .then(photoURL => {
            location.photoSrc = photoURL
            location.infoOn = false
            this.setState((prevState) => ({
                locations: prevState.locations.filter(filteredLocations => filteredLocations.id !== location.id).concat([location])
            }))
          })
      }) 

      this.setState({ 
        locations: searchResults, 
        markers
      }) 
    })
  }

  // Shows more information about the location on the side menu
  // Also opens the infowindow on the marker
  showInfo(location) {
    this.state.locations.forEach(locationHere => {
      if (locationHere.id === location.id && !location.infoOn) {
        location.infoOn = !location.infoOn
        this.clickMarker(this.state.markers.find(marker => location.id === marker.id ))
      } else if (locationHere.id === location.id && location.infoOn) {
        location.infoOn = !location.infoOn
        this.closeAllInfoWindow()
      }  else {
        locationHere.infoOn = false
      }
    })
    
    this.setState((prevState) => ({ locations: prevState.locations }))
  }

  // Shows infoWindow for only selected marker
  clickMarker = (marker) => {
    this.closeAllInfoWindow()
    marker.isOpen = true

    this.setState((prevState) => ({ markers: prevState.markers }))
  }
  
  closeAllInfoWindow() {
    this.state.markers.forEach(markerMap => {
      markerMap.isOpen = false
    })

    this.setState((prevState) => ({ markers: prevState.markers }))
  }


  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h3 onClick={this.showInfo}>RutherFood</h3>
        </header>

        <div className="Map-area" style={{ height: '100vh', width: '100%' }}>
          <Menu 
            locations={this.state.locations}
            showInfo={this.showInfo}
          />

          <GoogleMapComponent
            className="Google-maps"
            {...this.state}
            clickMarker={this.clickMarker}
          />
        </div>
        

        
      </div>
    );
  }
}

export default App