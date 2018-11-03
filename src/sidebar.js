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
			    <div className="black-text right" onClick={(event)=>this.props.changeNav()}><i className="material-icons" >close</i>
			    </div>
			    <div className="container-fluid">
			    	<div className="input-field col s6">
			          <input type="text" className="validate" onChange={e => this.props.search(e.target.value)}/>
			          <label>Search</label>
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