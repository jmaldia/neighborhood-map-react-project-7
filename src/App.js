import React, { Component } from 'react';
import * as FoursquareAPI from './utils/FoursquareAPI'

import ErrorBoundaryFourSquare from './errorHandlers/ErrorBoundaryFourSquare'
import ErrorBoundaryGoogleMap from './errorHandlers/ErrorBoundaryGoogleMap'
import Menu from './components/Menu'
import GoogleMapComponent from './components/GoogleMapComponent'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      results: [], 
      markers: [], 
      resultsMarkers: [], 
      categories: [],
      menuButton: false
    } 

    this.showInfo = this.showInfo.bind(this)
    this.clickMarker = this.clickMarker.bind(this)
    this.closeAllInfoWindow = this.closeAllInfoWindow.bind(this)
    this.filterLocations = this.filterLocations.bind(this)
    this.enterKeyPressed = this.enterKeyPressed.bind(this)
    this.menuButtonForMobile = this.menuButtonForMobile.bind(this)
  }

  componentDidMount() {
    FoursquareAPI.search().then(searchResults => {
      // Creates an array or markers for the map
      const markers = searchResults.map(location => {
        return {
          id: location.id,
          name: location.name, 
          address: location.location.address,
          categories: location.categories[0].name, 
          lat: location.location.lat, 
          lng: location.location.lng, 
          isOpen: false, 
          isVisible: true,
          animation: 0
        }
      })
      
      // Adds a photo URL to each location
      searchResults.forEach(location => {
        FoursquareAPI.getPhoto(location.id)
          .then(photoURL => {
            location.photoSrc = photoURL
            this.setState((prevState) => ({
                locations: prevState.locations.filter(filteredLocations => filteredLocations.id !== location.id).concat([location])
            }))
          })
      }) 
    

      // Sets initial values for state
      this.setState({ 
        locations: searchResults, 
        results: searchResults,
        markers, 
        markerResults: markers
      }) 
    })
  }

  // Shows more information about the location on the side menu
  // Also opens the infowindow on the marker
  showInfo(location) {
    this.state.locations.forEach(locationHere => {
      if (locationHere.id === location.id && !location.infoOn) {
        location.infoOn = !location.infoOn
        this.clickMarker(this.state.markers.find(marker => {
          // Adds animation to marker when location is clicked
          if (location.id === marker.id) {
            marker.animation = 2
            return marker
          } else {
            return null
          }
        }))
      } else if (locationHere.id === location.id && location.infoOn) {
        location.infoOn = !location.infoOn
        this.closeAllInfoWindow()
      }  else {
        locationHere.infoOn = false
      }
    })
    
    this.setState((prevState) => ({ 
      locations: prevState.locations,
      markers: prevState.markers
    }))
  }

  // For a11y - simulates click when location is focused and enter key pressed
  enterKeyPressed(event, location) {
    let code = event.keyCode || event.which;
    if(code === 13) { 
      this.showInfo(location)
    } 
  }

  // For a11y - simulates click when menu is pressed using enter key
  enterKeyPressedMobile(event) {
    let code = event.keyCode || event.which;
    if(code === 13) { 
      this.menuButtonForMobile()
    }
  }

  // When menu button is clicked, the menu is shown
  menuButtonForMobile() {
    this.setState({ menuButton: !this.state.menuButton })
  }

  // Shows infoWindow for only selected marker
  clickMarker = (marker) => {
    this.closeAllInfoWindow()
    marker.isOpen = true

    this.setState((prevState) => ({ markers: prevState.markers }))
  }
  
  // Closes all the infoWindow - helper
  closeAllInfoWindow() {
    this.state.markers.forEach(markerMap => {
      markerMap.isOpen = false
    })
    this.setState((prevState) => ({ markers: prevState.markers }))
  }

  // Function called by dropdown to filter by category
  filterLocations(value) {
    let filteredLocations 
    let filteredMarkers

    // Code to filter menu and markers
    if (value === 'All') {
      console.log(this.state.markers)
      filteredLocations = this.state.locations
      filteredMarkers = this.state.markers
    } else {
      filteredLocations = this.state.locations.filter(location => location.categories[0].name === value)
      filteredMarkers = this.state.markers.filter(marker => {
        if (marker.categories === value){
          console.log(marker.categories)
          return marker
        } else {
          return null
        }
      
      })
    }

    this.setState({ 
      results: filteredLocations,
      markerResults: filteredMarkers
    })
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h3 onClick={this.showInfo}>RutherFood</h3>
        </header>

        <div 
          tabIndex="1"
          className="Menu-button"
          aria-label="Menu" 
          role="Menu" 
          onClick={this.menuButtonForMobile}
          onKeyPress={ (event) => this.enterKeyPressedMobile(event) }
        >
          Menu
        </div>

        <div className="Map-area" style={{ height: '100vh', width: '100%' }}>
          <ErrorBoundaryFourSquare>
            <Menu 
              {...this.state}
              showInfo={this.showInfo}
              enterKeyPressed={this.enterKeyPressed}
              filterLocations={this.filterLocations}
            />
          </ErrorBoundaryFourSquare>
          

          <ErrorBoundaryGoogleMap>
            <GoogleMapComponent
              {...this.state}
              className="Google-maps"
              clickMarker={this.clickMarker}
            />
          </ErrorBoundaryGoogleMap>
        </div>

      </div>
    );
  }
}

export default App