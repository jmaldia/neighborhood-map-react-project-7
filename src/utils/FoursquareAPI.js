import { keys } from '../keys.js'

const url = "https://api.foursquare.com/v2/venues/"

export const search = () =>
  fetch(`${url}search?ll=40.8257712,-74.1074718&client_id=${keys.fourSquare.clientID}&client_secret=${keys.fourSquare.clientSecret}&v=20181010`)
    .then(res => res.json())
    .then(data => data.response.venues)