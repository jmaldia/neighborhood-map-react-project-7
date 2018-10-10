import React, { Component } from 'react'
import '../App.css'

class SideBar extends Component {
    state = {
        locations: this.props.locations
    }
    render() {
        return(
            <div className="SideBar">
                <header>
                    <h2>THE SPOTS</h2>
                </header>
                <ol>
                    {
                        this.props.locations.map(location => {
                            return (
                                <li key={location.id}>
                                    <h3>{location.name}</h3>
                                    <p>{location.location.formattedAddress}</p>
                                </li>
                            )
                        })
                    }
                </ol> 
            </div>
        )
    }
}

export default SideBar