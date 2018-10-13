import React from 'react'
import '../App.css'

const SideBar = props => {
    return(
        <div className="SideBar">
            <header>
                <h2>THE SPOTS</h2>
            </header>
            <ol>
                {
                    props.locations.map(location => {
                        let infoClass = location.infoOn ? 'Places-height-tl' : 'Places-height-sh'

                        return (
                            <li 
                                className={`Places ${infoClass}`} 
                                key={location.id} 
                                onClick={ () => props.showInfo(location) }
                            >
                                <h3>{location.name}</h3> 
                                <div className="Places-image">   
                                    <img src={location.photoSrc ? location.photoSrc : "https://via.placeholder.com/350x350"} width="100" alt={location.name}></img>
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
                                        { location.delivery && <p><a href={location.delivery.url}>Order Now</a></p> }
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