// global google
import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { keys } from '../keys';
import '../App.css'

const MapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    zoom={15}
    defaultCenter={{ lat: 40.8257712, lng: -74.1074718 }}
    center={{ lat: 40.8257712, lng: -74.1074718 }}
  >
    { 
        props.markerResults && props.markerResults.filter(marker => marker.isVisible).map((marker) => (
            <Marker 
                key={`m-${marker.id}`} 
                aria-label="Marker"
                position={{ lat: marker.lat, lng: marker.lng }} 
                onClick={() => props.clickMarker(marker) }
                animation={marker.animation}
            >
                { marker.isOpen && (
                    <InfoWindow>
                        <h3>{marker.name}<br />{marker.address}</h3>
                    </InfoWindow>
                )}
            </Marker>
        ))
    }
  </GoogleMap>
))

class GoogleMapComponent extends Component {
    
    render() {
        return (
            <MapComponent
                {...this.props}
                aria-label="Map"
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${keys.googleMaps.APIkey}`}
                loadingElement={<div style={{ height: `100%`,  width: `100%` }} />}
                containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            />
        )
    }
}

export default GoogleMapComponent