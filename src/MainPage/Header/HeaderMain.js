
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import HeaderMainMenu from './HeaderMainMenu';
import Courses from '../../courses/Courses';
import Routering from '../../Routering';




const HeaderMain = () =>{
    return(
        <div>
  <div className="contacts">
    <p>школа скандинавских языков</p>
    <div className="social">
      <ul><p>+ 7 893 567 78 67</p></ul>
      <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/025_instagram.png")} alt="inst" /></a></ul>
      <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/020_vk.png")} alt="vk" /></a></ul>
      <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/021_facebook.png")}  alt="fb" /></a></ul>
    </div>
  </div> 
  <div className="logo">
    <img className="graphiclogo" src={require("../../img/logo.png")} alt="logo" />
    <h1>NORN</h1>
  </div>
  <div className="menu">
    <ul>
      <li><Router>
        
        
        </Router></li> 
    </ul>
  </div>
</div>

    )
}
export default HeaderMain;