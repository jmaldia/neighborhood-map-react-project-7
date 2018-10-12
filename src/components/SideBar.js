import React, { Component } from 'react'
import '../App.css'

class SideBar extends Component {
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
                            let image = location.photoSrc
                            return (
                                <li className="Places" key={location.id} onClick={this.props.showModal}>
                                    <div className="Places-image">   
                                        <img src={image} width="100" alt="my restaurant"></img>
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
//onClick={this.props.click}