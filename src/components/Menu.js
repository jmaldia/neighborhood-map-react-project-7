import React from 'react'
import '../App.css'

const Menu = props => {
    return(
        <div className="Menu">
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
                                        <p>Category: { location.categories ? <span>{location.categories[0].name}</span> : 'Uncategorized' }</p>
                                    </div>
                                    <div className="Places-delivery">
                                        <p>{ location.delivery ? <a href={location.delivery.url}>Order Now</a> : 'Delivery not available'}</p>
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

export default Menu