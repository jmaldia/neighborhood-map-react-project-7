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
                            return (
                                <li className="Places" key={location.id} onClick={this.props.showModal}>
                                    <h3>{location.name}</h3> 
                                    <div className="Places-image">   
                                        <img src={location.photoSrc} width="100" alt={location.name}></img>
                                    </div>
                                    <div className="Places-info">
                                        <div className="Places-address">
                                            <p>{location.location.address}</p>
                                            <p>{location.location.city}, {location.location.state} {location.location.postalCode}</p>
                                        </div>
                                        <div className="Places-cross-street">
                                            { location.location.crossStreet && <p>Cross Street(s): {location.location.crossStreet}</p> }
                                        </div>
                                        <div className="Places-category">
                                            <p>Category: {location.categories[0].name}</p>
                                        </div>
                                        <div className="Places-delivery">
                                            { location.delivery && <p><a href={location.delivery.url} target="_blank">Order Now</a></p> }
                                        </div>
                                        
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

// <div className="Places-image">   
//     <img src={location.photoSrc} width="100" alt={location.name}></img>
// </div>
// <div className="Places-info">
//     <h3>{location.name}</h3>
//     <p>{location.location.address}</p>
// </div>