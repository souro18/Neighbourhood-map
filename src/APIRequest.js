const url = "https://api.foursquare.com/v2/venues/explore?client_id=02TQD0SIBSMPLK1MJFCNIVVNWL5OOVOEZ2P13DVAKICFQKZU&client_secret=RRDGPDGTZ3W1CAK3AW12OQUAWYB3BWTP0NLWISACPEB40MY2&limit=40"

const headers = {
  'Accept': 'application/json'
}
export const getAll = () =>
  fetch(`${url}&v=20180101&near=kolkata`, { headers })
    .then(res => res.json())
    .then(data => data.response.groups[0].items)
    .catch( e => console.log(e))