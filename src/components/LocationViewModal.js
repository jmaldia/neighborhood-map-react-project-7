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