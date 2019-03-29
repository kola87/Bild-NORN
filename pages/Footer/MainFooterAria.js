import React from 'react';

const MainFooterAria = ()=>{
    return(
      <div>
 <div className="footer_background">
      <div className="left_aria">
        <div className="logo_bottom">
          <a href="index.html"><img className="graphiclogo" src={require("../../img/logo_white.svg")} alt="logo" /></a>
          <div className="norn_logo_div"> <h1>NORN</h1></div>
          <div className="text_under_logo_bottom"><p>школа скандинавских языков</p></div>
        </div> 
      </div>                        
      <div className="middle_area">
        <div className="social_footer">
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/white_instagram.svg")} alt="inst" /></a></ul>
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/white_vk.svg")} alt="vk" /></a></ul>
          <ul> <a href="index.html"><img className="graphicsocial" src={require("../../img/white_facebook.svg")} alt="fb" /></a></ul>
          <div class="phone_numb_footer"><p>+7 893 567 78 67</p></div> 
        </div>
      </div> 
      
      <div className="right_area">
        <p>199983, Санкт-Петербург ул. Казанская, 32, БЦ “Успех”, 7 этаж</p>
        <div><p>c 10:00 до 22:00 с ПН по СБ </p></div>
      </div> 
    </div>
 
    
      </div>
     
      
    )
}

export default MainFooterAria;