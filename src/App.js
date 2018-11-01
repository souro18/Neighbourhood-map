import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './sidebar'
import * as APIRequest from './APIRequest'
import Map from './Map'

class App extends Component {
  state ={
    places : [],
    lat : 0 ,
    lng : 0
  }
  placeOnClick=(lat,lng)=>{
    this.setState({lat})
    this.setState({lng})
    console.log(lat,lng);
  }
  changeNav = ()=> {
      const main=document.getElementById("main");
      const sidebar=document.getElementById("sidebar");
    // const map = document.getElementById("map");
    if(sidebar.style.display==="block") {
      // main.style.width = "100%";
      // main.style.marginLeft = "0%";
      sidebar.style.display = "none";
      // map.style.width ="100%";
      console.log("block to none");
    }
    else{
      // main.style.marginLeft = "25%";
      // main.style.width = "75%";
      // map.style.width ="75%";
      // sidebar.style.width = "25%";
      sidebar.style.display = "block";
      console.log("none to block");
    }
  }
  componentWillMount() {
    APIRequest.getAll().then((res)=>{
      console.log(res);
      this.setState({places : res })
    })
    }
  render() {

    return (
      <div className="App">
        <SideBar changeNav={this.changeNav} places={this.state.places} placeOnClick={this.placeOnClick}/>
  <div id="main">
    <nav className="row">
    <div  className="black-text col s1 center" onClick={(event)=>this.changeNav()}><i className="material-icons" >dehaze</i></div>
    </nav>
    <Map places={this.state.places} lat={this.state.lat} lng={this.state.lng}/>
  </div>
      </div>
    );
  }
}

export default App;
