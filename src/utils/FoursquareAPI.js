import { keys } from '../keys.js'

const url = "https://api.foursquare.com/v2/venues/"

export const search = () =>
  fetch(`${url}search?ll=40.8257712,-74.1074718&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20181010&categoryId=4d4b7105d754a06374d81259&radius=600`)
    .then(res => res.json())
    .then(data => data.response.venues)