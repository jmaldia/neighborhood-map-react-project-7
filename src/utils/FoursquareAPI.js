import { keys } from '../keys.js'

const url = "https://api.foursquare.com/v2/venues/"

export const search = () =>
  fetch(`${url}search?ll=40.8257712,-74.1074718&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20181010&categoryId=4d4b7105d754a06374d81259&radius=600&limit=10`)
    .then(res => res.json())
    .then(data => {
        if (data.meta.errorType) {
            console.log(`Uh oh. Something happened. \nError: ${data.meta.errorDetail}`)
        } else {
            return data.response.venues
        }
    })


export const getPhoto = (venueId) =>
    fetch(`https://api.foursquare.com/v2/venues/${venueId}/photos?limit=1&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20131016`)
        .then(res => res.json())
        .then(data => {  
            if (data.meta.errorType) {
                console.log(`Uh oh. Something happened. \nError: ${data.meta.errorDetail}`)
            } else {
                return `https://igx.4sqi.net/img/general/300x300${data.response.photos.items[0].suffix}`
            }
        })