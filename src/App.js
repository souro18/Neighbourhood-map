import React, { Component } from 'react';

import './App.css';
import SideBar from './sidebar'
import * as APIRequest from './APIRequest'
import Map from './Map'
import escapeRegExp from 'escape-string-regexp'

class App extends Component {
  state ={
    places : [],
    lat : 0 ,
    lng : 0 ,
    searchedPlaces :[],
    error : 0
  }
  placeOnClick=(lat,lng)=>{
    this.setState({lat})
    this.setState({lng})
  }
  changeNav = ()=> {
      const sidebar=document.getElementById("sidebar");
    if(sidebar.style.display==="block") {
      sidebar.style.display = "none";
    }
    else{
      sidebar.style.display = "block";
    }
  }
  search=(query) =>{
    const match = new RegExp(escapeRegExp(query),'i')
    if(query){
      let p=this.state.places.filter(place => match.test(place.venue.name))
      this.setState({searchedPlaces : p})
    }
    else {
      this.setState({searchedPlaces : this.state.places})
    }
  }
  componentWillMount() {
    APIRequest.getAll().then((res)=>{
      console.log(res);
      if(!res || res.error) {
        this.setState({error : 1})
      }
      else {
        this.setState({places : res })
        this.setState({searchedPlaces : res })
      }
    })
    }
  render() {

    return (
      <div className="App">
        <SideBar changeNav={this.changeNav} places={this.state.searchedPlaces} placeOnClick={this.placeOnClick} search={this.search}/>
        <div id="main">
          <nav className="row header">
          <div  className="white-text col s1 center" onClick={(event)=>this.changeNav()}><i className="material-icons" >dehaze</i></div>
          <h2 className="center white-text">{(this.state.error) ? "Data not loaded.": "Kolkata" }</h2>
          </nav>
          <Map places={this.state.searchedPlaces} lat={this.state.lat} lng={this.state.lng}/>
        </div>
      </div>
    );
  }
}

export default App;
