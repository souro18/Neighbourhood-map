import React from 'react'

function Place(props) {
	return (
		<li>
	      <div className="collapsible-header" onClick={(event)=>props.placeOnClick(props.place.venue.location.lat,props.place.venue.location.lng)}>{props.place.venue.name}</div>
	      <div className="collapsible-body grey lighten-5">
	      	<div>Type : {props.place.venue.categories[0].name}</div>
	      	<div>
	      		<p>{(props.place.venue.location.address)?
	      			(<span>Address {props.place.venue.location.address} <br/></span>):null}
	      			{props.place.venue.location.city}
	      		</p>
	      		{(props.place.venue.location.postalCode)?
	      		(<p>Pin Code : {props.place.venue.location.postalCode}</p>):null}
	      	</div>

	      </div>
	    </li>
		)
}
export default Place;