import React, { Component } from 'react';
import '../App.css'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
          locations: props.locations
        } 
    }


    render() {
        return(
            <div className="Menu">
                <header>
                    <h2>THE SPOTS</h2>
                </header>

                <select 
                    className="Filter-dropdown" 
                    onChange={(event) => this.props.filterLocations(event.target.value)}
                >
                    <option value="All">All Locations</option>
                    <option value="New American Restaurant">American Restaurants</option>
                    <option value="Asian Restaurant">Asian Restaurants</option>
                    <option value="Bagel Shop">Bagel Spots</option>
                    <option value="Bistro">Bistros</option>
                    <option value="Breakfast Spot">Breakfast Spots</option>
                    <option value="Fried Chicken Joint">Chicken Spots</option>
                    <option value="Coffee Shop">Coffee Spots</option>
                    <option value="Cuban Restaurant">Cuban Restaurant</option>
                    <option value="Deli / Bodega">Deli/Bodega Spots</option>
                    <option value="Dessert Shop">Dessert Spots</option>
                    <option value="Donut Shop">Donut Spots</option>
                    <option value="Falafel Restaurant">Falafel Restaurants</option>
                    <option value="Greek Restaurant">Greek Restaurants</option>
                    <option value="Ice Cream Shop">Ice Cream Spots</option>
                    <option value="Irish Pub">Irish Restaurants</option>
                    <option value="Italian Restaurant">Italian Restaurants</option>
                    <option value="Mexican Restaurant">Mexican Restaurants</option>
                    <option value="Sushi Restaurant">Sushi Restaurants</option>
                </select>

                <ol>
                    {
                        this.props.results.map(location => {
                            let infoClass = location.infoOn ? 'Places-height-tl' : 'Places-height-sh'

                            return (
                                // <div>
                                // { location.isVisible && 
                                <li 
                                    className={`Places ${infoClass}`} 
                                    key={location.id} 
                                    onClick={ () => this.props.showInfo(location) }
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
                                // }
                                // </div>
                            )
                        })
                    }
                </ol> 
            </div>
        )
    }
}

export default Menu