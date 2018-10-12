import React, { Component } from 'react'
import '../App.css'

class LocationViewModal extends Component {
    componentDidMount() {
    }

    render() {
        console.log(this.props.locations)
        return(
            <div className="Location-view-modal">
                This is the modal
            </div>
        )
    }
}

export default LocationViewModal

// <div className="Places-image">   
//                     <img src={this.props.locations[0].photoSrc} width="100" alt="my restaurant"></img>
//                 </div>
//                 <div className="Places-info">
//                     <h3>{this.props.locations[0].name}</h3>
//                     <p>{this.props.locations[0].location.address}</p>
//                 </div>