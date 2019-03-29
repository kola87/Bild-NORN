import React from 'react';


    const Nine_Squars = () =>{
      return (
        <div>
            
          <div><h1 className="text_top_header">какой язык <br />хотите изучать?</h1></div>
          <div className="courses_9_rectangles">
            <div className="rect_1">
              <h2>Норвежский</h2>
              <p><a href=" "> Пройти входное тестирование
                </a></p><div><a href=" "><img src={require("../../img/Arrow_2.svg")} alt="" /></a></div>
            </div>
            <div className="rect_2">
              <div className="background_rect_2"> 
              </div>
              <p>Исландский</p>
            </div>
            <div className="rect_3">
              <div className="background_rect_3"> 
              </div>
              <p>Шведский</p>
            </div>
            <div className="rect_red_45" />
            <div className="rect_4">
              <div className="background_rect_4"> 
              </div>
              <p>Финский</p>
            </div>
            <div className="rect_grey_80">
              <div className="rect_white_37">
                <div className="rect_black_27">
                </div>
              </div>
            </div>  
            <div className="rect_5">
              <div className="background_rect_5"> 
              </div>
              <p>Датский</p>
            </div>    
          </div>
          <div className="background_main"></div>
        </div>
         
      )
    }
 export default Nine_Squars