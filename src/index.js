import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Courses from './courses/Courses';
import SummerSchool from './summerSchool/SummerSchool';
import AboutUS from './aboutUS/AboutUS';
import Contacts from './contacts/Contacts';


ReactDOM.render(
    
       <Router>
             <div>
                 <div className="menu">
                     <Link to="/">главная</Link>
                     <Link to="/courses/Courses">курсы</Link>
                     <Link to="/aboutUS/aboutUS">О нас</Link>
                     <Link to="/summerSchool/SummerSchoo">летняя школа</Link>
                     <Link to="/contacts/Contacts">контакты</Link>
                    
                 </div>
                 <Route exact path="/" component={App}/>
                 <Route path="/courses/Courses" component={Courses}/>
                 <Route path="/aboutUS/AboutUS" component={AboutUS}/>
                 <Route path="/summerSchool/SummerSchool" component={SummerSchool}/>
                 <Route path="/contacts/Contacts" component={Contacts}/>
             </div>
         </Router>,
   
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
