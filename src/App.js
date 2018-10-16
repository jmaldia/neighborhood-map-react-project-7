import React, { Component } from 'react';
import SideBar from './components/SideBar'
import GoogleMapComponent from './components/GoogleMapComponent'
import './App.css';
import * as FoursquareAPI from './utils/FoursquareAPI'

let marker

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      markers: [],
      center: []
      // showModalBool: false,
      // infoOn: [],
      // photoSrc: ''
    } 

    this.showInfo = this.showInfo.bind(this)
  }

  // static defaultProps = {
  //   center: {
  //     lat: 40.8257712,
  //     lng: -74.1074718
  //   },
  //   zoom: 16.5
  // }

  componentDidMount() {
    FoursquareAPI.search().then(searchResults => {
      // const { locations } = searchResults.response
      console.log(searchResults)
      // const { center } = searchResults.response.geocode.feature.qeometry
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



  clickMarker = (marker) => {
    console.log(marker)
    marker.isOpen = true

    this.setState({ markers: Object.assign(this.state.markers, marker) })
    // this.setState((prevState) => ({
    //   markers: prevState.markers.filter(filteredMarker => filteredMarker.id !== marker.id).concat([marker])
    // }))
  }







  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <h3 onClick={this.showInfo}>RutherFood</h3>
        </header>

        <div className="Map-area" style={{ height: '100vh', width: '100%' }}>
          

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


// <SideBar 
//             locations={this.state.locations}
//             photo={this.state.photoSrc}
//             showInfo={this.showInfo}
//           />

// const AnyReactComponent = ({ text }) => <div>{text}</div>
// <AnyReactComponent
// lat={this.props.center.lat}
// lng={this.props.center.lng}
// />


// import GoogleMapReact from 'google-map-react'
// <GoogleMapReact
    //   bootstrapURLKeys={{ key: keys.googleMaps.APIkey }}
    //   defaultCenter={this.props.center}
    //   defaultZoom={this.props.zoom}
    //   // onGoogleApiLoaded={({map, maps}) => { this.renderMarkers(map, maps) }}
    //   yesIWantToUseGoogleMapApiInternals={true}
    // >
    // </GoogleMapReact>






  

    // this.renderMarkers = this.renderMarkers.bind(this)
    // this.clickNameToShowInfo = this.clickNameToShowInfo.bind(this)
  // renderMarkers(map, maps) {
  //   let infowindow = new maps.InfoWindow()
  //   this.state.locations.forEach(location => {
  //     infowindow = {
  //       content: `<h1>${location.name}</h1>
  //                 <h3>${location.location.address}</h3>`
  //     }

  //     marker = new maps.Marker({
  //       position: {
  //         lat: location.location.lat, 
  //         lng: location.location.lng
  //       },
  //       map,
  //       animation: maps.Animation.DROP
  //     })

  //     marker.addListener(marker, 'click', (marker) => {
  //       infowindow.open(map, marker)

  //       if (marker.getAnimation() !== null) {
  //         marker.setAnimation(null);
  //       } else {
  //         marker.setAnimation(maps.Animation.BOUNCE);
  //       }
  //     })

  //     marker.id = location.id

  //     this.setState((prevState) => ({
  //       markers: prevState.markers.filter(filteredMarkers => filteredMarkers.id !== marker.id).concat([marker])
  //     }))

  //     return marker
  //   })

  //   maps.event.addListener(map, 'click', function() {
  //     infowindow.close()
  //   })
  // }

  // clickNameToShowInfo(id) {
  //   this.state.markers.forEach(filteredMarker => {
  //     if (filteredMarker.id === id) {
  //       // filteredMarker.map.trigger(filteredMarker.id, 'click')
  //       // filteredMarker.trigger(filteredMarker, 'click');
  //       console.log(filteredMarker.__e3_.click)
  //       return filteredMarker.id
  //     }
  //   })
  // }