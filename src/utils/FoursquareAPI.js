import { keys } from '../keys.js'

const url = "https://api.foursquare.com/v2/venues/"
const lng = "40.8257712"
const lat = "-74.1074718"
const categoryId = " 4d4b7105d754a06374d81259"
const radius = 600
const version = "20181015"


export const search = () =>
  fetch(`${url}search?ll=${lng},${lat}&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=${version}&categoryId=${categoryId}&radius=${radius}&limit=3`)
    .then(res => res.json())
    .then(data => {
        if (data.meta.errorType) {
            console.log(`Uh oh. Something happened. \nError: ${data.meta.errorDetail}`)
        } else {
            return data.response.venues
        }
    })


export const getPhoto = (venueId) =>
    fetch(`https://api.foursquare.com/v2/venues/${venueId}/photos?limit=1&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=${version}`)
        .then(res => res.json())
        .then(data => {  
            if (data.meta.errorType) {
                console.log(`Uh oh. Something happened. \nError: ${data.meta.errorDetail}`)
            } else {
                return `https://igx.4sqi.net/img/general/300x300${data.response.photos.items[0].suffix}`
            }
        })