import React, { Component } from 'react'
import '../App.css'

class SideBar extends Component {
    state = {
        locations: this.props.locations
    }

    componentDidMount() {
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
                                <li className="Places" key={location.id}>
                                    <div className="Places-image">
                                        <img src="https://via.placeholder.com/75x75" width="100" alt="my restaurant"></img>
                                    </div>
                                    <div className="Places-info">
                                        <h3>{location.name}</h3>
                                        <p>{location.location.address}</p>
                                    </div>
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

// add to LI later > <img src={this.props.photo} width="100" alt="my restaurant"></img>
// { location.location.formattedAddress.map(addr => <p>{addr}</p>) }