import React from 'react';
import '../App.css'

const Menu = props => {
    let menuButtonClass = props.menuButton ? 'Menu Menu-button-on' : 'Menu Menu-button-off'

    return(
        <div aria-label="Sidebar Menu" role="Menu" className={menuButtonClass} >
            <header>
                <h2>THE SPOTS</h2>
            </header>

            <div aria-label="Category Filter" role="Option" aria-selected className="Filter">
                <select 
                    className="Filter-dropdown" 
                    tabIndex="2"
                    onChange={(event) => props.filterLocations(event.target.value)}
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
            </div>

            <ol aria-label="List of Locations" >
                {
                    props.results.map((location, index) => {
                        let infoClass = location.infoOn ? 'Places-height-tl' : 'Places-height-sh'
                        
                        return (
                            <li 
                                className={`Places ${infoClass}`} 
                                tabIndex={index + 2}
                                key={location.id} 
                                onClick={ () => props.showInfo(location) }
                                onKeyPress={ (event) => props.enterKeyPressed(event, location) }
                            >
                                <h3>{location.name}</h3> 
                                <div aria-label="Location Image" className="Places-image">   
                                    <img src={location.photoSrc ? location.photoSrc : "https://imgplaceholder.com/300x300/8ec9ee/ffffff?text=Sorry+the_br_image+for_br_this+location_br_is+not+available"} width="100" alt={location.name}></img>
                                </div>
                                <div aria-label="Location Information" className="Places-info">
                                    <div aria-label="Location Address" className="Places-address">
                                        <p>{location.location.address}</p>
                                        <p>{location.location.city}, {location.location.state} {location.location.postalCode}</p>
                                    </div>
                                    <div aria-label="Location Cross Street" className="Places-cross-street">
                                        { location.location.crossStreet && <p>Cross Street(s): {location.location.crossStreet}</p> }
                                    </div>
                                    <div aria-label="Location Category" className="Places-category">
                                        <p>Category: { location.categories ? <span>{location.categories[0].name}</span> : 'Uncategorized' }</p>
                                    </div>
                                    <div aria-label="Delivery Information" className="Places-delivery">
                                        <p>{ location.delivery ? <a tabIndex="-1"  href={location.delivery.url}>Order Now</a> : 'Delivery not available'}</p>
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