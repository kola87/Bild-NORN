
import React from 'react';
const MainBlock4SeaSlider = ()=>{
    return(
      <div>
 
 <div className="field_sea">
      <div className="gradient_sea_2" />
      <div className="mark_sea2">
        <img src={require("../../img/mark_sea2_white.svg")} alt="white_symbol_on_a_sea2_field" />
      </div>
      <div className="talk_abour_us"><p>ЧТО УЧЕНИКИ ГОВОРЯТ О НАС</p></div>
      <div className="single_blok">
        <div className="vector_left">
          <a href=" "><img src={require("../../img/Vector_left.png")} alt="Vector_left" /></a>
        </div>
        <div className="p_ingebor">
          <ul><p>Ингеборга Д.</p></ul>
        </div>
        <div className="text_center">
          <ul><p>Благодаря данным курсам мой уровень шведского <br />с preintermediate дошел до upper intermediate. Результата добивалась долго, методика интенсивная и интересная. Всегда есть к чему стремиться.</p></ul>
        </div>
        <div className="vector_right"> 
          <a href=" "> <img src={require("../../img/Vector_right.png")} alt="Vector_right" /></a></div>
        <div className="tabs_down">
          <a href="#"><div className="rect_small_white_2" /></a>
          <a href="#"><div className="rect_small_white_2" /></a>
          <a href="#"><div className="rect_small_white_2" /></a>
          <a href="#"><div className="rect_small_white_2" /></a>
          <a href="#"><div className="rect_small_white_2" /></a>
        </div>
      </div> 
    </div>   
    
      </div>
     
      
    )
}

export default MainBlock4SeaSlider;