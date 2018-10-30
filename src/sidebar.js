import React , { Component } from 'react';

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
			          <input type="text" className="validate"/>
			          <label>Search</label>
			        </div>
			    </div>
			    <div id="scroll">
			             <ul className="collapsible">
			             {this.props.places.map((place)=>{
			             	return (<li key={place.venue.id}>
						      <div className="collapsible-header">{place.venue.name}</div>
						      <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
						    </li>)
			             }
			             )}
						  </ul>
			    </div>
			</div>
			);
	}
}
export default SideBar;