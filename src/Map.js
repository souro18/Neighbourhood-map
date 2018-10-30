import React , {Component} from 'react'


class Map extends Component {
	componentDidMount() {
		window.mapboxgl.accessToken = 'pk.eyJ1Ijoic291cm8xOCIsImEiOiJjam1ydHZuMHYwMGNjM3FtdGV4cnFueGI1In0.cWXo4x2v6BrxJ81goB2DPA';
var map = new window.mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [88.3639,22.5726], // starting position [lng, lat]
    zoom: 11 // starting zoom
});
var marker = new window.mapboxgl.Marker()
    .setLngLat([-74.50, 40])
    .addTo(map);
console.log(marker.properties);
marker._element.style.color = "#f00";
console.log(marker);
var marker1 = new window.mapboxgl.Marker()
    .setLngLat([-74, 45])
    .addTo(map);
var e1 = document.createElement('div');
e1.className = 'marker';
e1.style.backgroundImage = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png";
e1.style.width= "100px";
e1.style.height = "100px";
e1.style.color ="#f00";
e1.style.zIndex= "150";
console.log(e1);
new window.mapboxgl.Marker(e1)
        .setLngLat([-74,40.56])
        .addTo(map);
  };

	render() {
		return (
			<section className="map-container"><div id="map"></div></section>
			)
	}
}
export default Map;