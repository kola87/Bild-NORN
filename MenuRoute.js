import React from 'react';
import './App.css';
import PageMain from './pages/PageMain';
import PageCourses from './pages/PageCourses';
import PageSummerSchool from './pages/PageSummerSchool';
import PageContacts from './pages/PageContacts';
import PageAboutUS from './pages/PageAboutUS';
import {BrowserRouter, Route} from 'react-router-dom'; 




const MenuRoute = () => {
  return (
    
    <BrowserRouter>
    <div>
     <div className="menu">
     <Route exact path='/' component={PageMain} />
     <Route path='/PageCourses' component={PageCourses} />
     <Route path='/PageSummerSchool' component={PageSummerSchool} />
     <Route path='/PageContacts' component={PageContacts} />
     <Route path='/PageAboutUS' component={PageAboutUS} />
     </div>
     </div>
    </BrowserRouter>
    )
    }

export default MenuRoute;
