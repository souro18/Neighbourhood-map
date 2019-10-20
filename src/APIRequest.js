const url = `https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&limit=40`

const headers = {
  'Accept': 'application/json'
}
export const getAll = () =>
  fetch(`${url}&v=20180101&near=kolkata`, { headers })
    .then(res => res.json())
    .then(data => data.response.groups[0].items)
    .catch( e => alert("data not loaded properly"))