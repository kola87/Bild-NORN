import React from 'react';
const Footer_Aria_Courses = ()=>{
    return(
        <div className="footer_aria_courses">
        <div className="footer_col1">
          <div className="logo_bottom_2">
            <img className="graphiclogo_footer_courses" src={require("../../img/logo_white.svg")} alt="logo" /></div> 
          <div className="rect_brown_down_logo">  
          </div>
        </div>
        <div className="footer_col2">
          <p>NORN<br /> школа скандинавских языков</p>
          <div className="footer_col2_middle_p"><p>199983, Санкт-Петербург<br /> ул. Казанская, 32, БЦ “Успех”, 7 этаж<br /> c 10:00 до 22:00 с ПН по СБ</p></div>
          <p><a href="mailto:norn@gmail.com" style={{color: 'white'}}>norn@gmail.com</a></p>
          <p><a href="tel:+78935677867" style={{color: 'white'}}>+ 7 (893) 567 78 67</a></p>
        </div>
        <div className="footer_col3">
          <a href="#" className="h" style={{color: 'white'}}><p>Шведский язык</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Норвежский язык</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Исландский язык</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Финский язык</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Датский язык</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Тестирование</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Формы обучения</p></a>
        </div>
        <div className="footer_col4">
          <a href="#" className="h" style={{color: 'white'}}><p>Аудитории</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Преподаватели</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Летняя школа</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Отзывы</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>Политика<br /> конфиденциальности</p></a>
          <a href="#" className="h" style={{color: 'white'}}><p>FAQ</p></a>
        </div>
      </div>
      
    
  

    )
}

export default Footer_Aria_Courses