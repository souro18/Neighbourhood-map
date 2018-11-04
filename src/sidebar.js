import React , { Component } from 'react';
import Place from './Place'

class SideBar extends Component {
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
		    var elems = document.querySelectorAll('.collapsible');
		    var instances = window.M.Collapsible.init(elems, {});
		  });
	}
	render() {
		return (
			<div id="sidebar">
			    <div className="black-text right s1" onClick={(event)=>this.props.changeNav()}><i className="material-icons" >close</i>
			    	</div>
			    <div className="row">  
			        <div className="input-field col s12 left">
			          <input id="search" type="text" className="validate" onChange={e => this.props.search(e.target.value)}/>
			          <label htmlFor="search">Search</label>
			        </div>
			    </div>
			    <div id="scroll">
			             <ul className="collapsible">
			             {this.props.places.map((place)=>{
			             	return <Place  place={place} key={place.venue.id} placeOnClick={this.props.placeOnClick}/>
			             }
			             )}
						  </ul>
			    </div>
			</div>
			);
	}
}
export default SideBar;