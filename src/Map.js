import React , {Component} from 'react'


class Map extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	map : {}
	    }
	}
	addMarker(places) {
		let markers=places.map((place) => {
			return new window.mapboxgl.Marker()
		        	.setLngLat([place.venue.location.lng,place.venue.location.lat])
        			.addTo(this.state.map);
		})
	}
	componentWillReceiveProps(props) {
		if(this.props.places!==props.places){
			this.addMarker(props.places);
		}
	}
	componentDidMount() {
		let markers = [];
		window.mapboxgl.accessToken = 'pk.eyJ1Ijoic291cm8xOCIsImEiOiJjam1ydHZuMHYwMGNjM3FtdGV4cnFueGI1In0.cWXo4x2v6BrxJ81goB2DPA';
		var map = new window.mapboxgl.Map({
		    container: 'map', // container id
		    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
		    center: [88.3639,22.572], // starting position [lng, lat]
		    zoom: 11 // starting zoom
		});
		this.setState({map})

  }
	
	render() {
		
		return (
			<section className="map-container"><div id="map"></div></section>
			)
	}
}
export default Map;