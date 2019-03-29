import React from 'react';
import PagesMenu from '../PagesMenu';






const CoursesHeader = ()=>{
    return(
      <div className="wrapper_courses">
      <div className="blok_logo">
        <div className="rect_brown_top_logo">
          <div className="logo_courses">
            <img className="graphiclogo" src={require("../../img/logo.png")} alt="logo" />
            <h1>NORN</h1>
          </div>
        </div>
      </div> 
      <div className="menu_courses">
        <ul>
          <li><PagesMenu /> </li>
        </ul>
       
        <div className="social_courses">
          <p>+ 7 893 567 78 67</p>
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/025_instagram.png")} alt="inst" /></a></ul>
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/020_vk.png")} alt="vk" /></a></ul>
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/021_facebook.png")} alt="fb" /></a></ul>
        </div>
      </div>
    </div>
    
    
  

    )
}

export default CoursesHeader;