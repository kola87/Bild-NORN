
import React from 'react';
const MainBlock2Black = ()=>{
    return(
      <div>
 
    <div className="body_background2" >
    <div className="bloks">
      
      <div className="p_under_symbol">
      <div className="symbol_mark5">
      <img src={require("../../img/mark5_white.svg")} alt="mark5_white" />
      </div>
        <p>КАКОЙ ВИД ОБУЧЕНИЯ ПОДОЙДЕТ ВАМ?</p>
      </div> 
      <div className="blok_1">
        <p>ОНЛАЙН</p>
        <p>Подойдет для удаленного изучения</p>
        <p><a href=" "><p>ЗАПОЛНИТЬ АНКЕТУ<img src={require("../../img/Arrow.svg")} className="arrow_1" alt="arrow" /></p></a></p>
      </div>
      <div className="rect_small_white_1" />
      <div className="blok_2">
        <p>ЗАНЯТИЯ В ГРУППЕ</p>
        <p>Небольшие группы и удобные аудитории для тех, кто предпочитает учитьязыки в группе</p>
        <p><a href=" "><p>СМОТРЕТЬ РАСПИСАНИЕ<img src={require("../../img/Arrow.svg")} className="arrow_1" alt="arrow" /></p></a></p>
      </div>
      <div className="rect_small_white_2" />
      <div className="blok_3">
        <p>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</p>
        <p>Индивидуальные занятия с преподавателем в удобное время</p>
      </div>
    </div> 

    <div className="gradient_sea" />
    </div>
    
      </div>
     
      
    )
}

export default MainBlock2Black;