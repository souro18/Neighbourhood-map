import React , {Component} from 'react'


class Map extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	map : {},
	    	markers :[]
	     }
	}
	addMarker(places) {
		this.state.markers.map((m)=> m.remove())  //delete current markers
		let markers=places.map((place) => {
			const popup = new window.mapboxgl.Popup()
    				.setText(place.venue.name);
			return new window.mapboxgl.Marker()
		        	.setLngLat([place.venue.location.lng,place.venue.location.lat])
		        	.setPopup(popup)
        			.addTo(this.state.map);		
		})
		this.setState({markers})
	}
	flyToLocation(lng,lat) {
		  this.state.map.flyTo({
		        center: [lng,lat],
		        zoom: 17,
		        bearing: 0,
		        speed: 1, 
		        curve: 2,
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
		window.mapboxgl.accessToken = 'pk.eyJ1Ijoic291cm8xOCIsImEiOiJjam1ydHZuMHYwMGNjM3FtdGV4cnFueGI1In0.cWXo4x2v6BrxJ81goB2DPA';
		var map = new window.mapboxgl.Map({
		    container: 'map',
		    style: 'mapbox://styles/mapbox/streets-v9', 
		    center: [88.3639,22.572], 
		    zoom: 11 
		});
		map.on('error',function(e) {
			console.log(e);
		})
		console.log(map)
		this.setState({map})
  }
	
	render() {	
		return (
			<section className="map-container" role="application"><div id="map"></div></section>
			)
	}
}
export default Map;