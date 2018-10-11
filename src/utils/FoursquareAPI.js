import { keys } from '../keys.js'

const url = "https://api.foursquare.com/v2/venues/"

export const search = () =>
  fetch(`${url}search?ll=40.8257712,-74.1074718&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20181010&categoryId=4d4b7105d754a06374d81259&radius=600`)
    .then(res => res.json())
    .then(data => data.response.venues)


export const getPhoto = (venueId) => {
    fetch(`https://api.foursquare.com/v2/venues/4bc23968b492d13a2d35a760/photos?limit=1&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20131016`)
        .then(res => res.json())
        .then(data => console.log(data))
}
    