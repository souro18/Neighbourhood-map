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
	flyToLocation(lng,lat) {
		console.log(lat,lng);
		  this.state.map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: [lng,lat],
        zoom: 17,
        bearing: 0,

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.8, // make the flying slow
        curve: 2, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
    });
	}
	componentWillReceiveProps(props) {
		if(this.props.places!==props.places){
			this.addMarker(props.places);
		}
		if(this.props.lng!==props.lng && this.props.lat!==props.lat) {
			this.flyToLocation(props.lng,props.lat);
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