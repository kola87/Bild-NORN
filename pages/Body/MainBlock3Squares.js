
import React from 'react';
const MainBlock3Squares = ()=>{
    return(
      <div>
 
 <div className="ractangle_section">
      <div className="cap_pic" />
      <div className="rect_grey2_3">
        <img src={require("../../img/Rectangle 2.3.png")} alt="grey_rectangle" />
        <div className="menu_text_grey_rect">
          <div className="rect_small_white_1" />
          <p>Квалифицированные преподаватели с <br /> опытом  и носители</p>
          <div className="rect_small_white_1" />
          <p>Комфортные аудитории в центре</p>
          <div className="rect_small_white_1" />
          <p>Подготовка к экзаменам</p>
          <div className="rect_small_white_1" />
          <p>Летние школы</p>
        </div>
      </div>
      <div className="rect_brown2_6">
        <div className="child_brown2_6">
          <img src={require("../../img/Rectangle_2.10_2.png")} alt="child_of_brown" />
        </div>
        <div className="mark_4_white">
          <img src={require("../../img/mark4_white.svg")} alt="mark_4_white" />
        </div>
        <div className="white_uppercase_text"><p>преимущества</p></div>
      </div>
      <div className="pic_arrow_rect">
        <div className="pict_arrow"> 
        </div>
        <div className="ract_small_arrow">
          <img src={require("../../img/Rectangle_pic_arrow.png")} alt="Rectangle_pic_arrow" />
        </div>
      </div>
      <div className="classroom_section">
        <div className="pict_classroom">
        </div>   
      </div>
      <div className="tutor">
        <div className="tutor_img">
          <div className="tutor_rect_black">
            <img src={require("../../img/tutor_rect_black.png")} alt="tutor_rect_black" />
          </div>
          <div className="tutor_rect_white">
            <img src={require("../../img/tutor_rect_white.png")} alt="tutor_rect_white" />
          </div>
        </div>  
      </div>
      <div className="man">
        <div className="man_pict">
          <div className="rect_small_man">
            <img src={require("../../img/rect_teacher_man.png")} alt="smal_ractangel_of teacher" />
          </div>
        </div>
      </div>
    </div>
    
      </div>
     
      
    )
}

export default MainBlock3Squares;