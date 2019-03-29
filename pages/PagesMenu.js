import React from 'react';
import {NavLink} from 'react-router-dom';
const PagesMenu = () => {
    return(
       
        <div> 
            <div className="menu_li">
        <NavLink to ="/">Главная страница </NavLink>
        <NavLink to ="/PageCourses">Курсы </NavLink>
        <NavLink to ="/PageSummerSchool">Летняя школа </NavLink>
        <NavLink to ="/PageContacts">Контакты </NavLink>
        <NavLink to ="/PageAboutUS">О Нас </NavLink>
        </div>
        </div>
       
    )

}
export default PagesMenu;
