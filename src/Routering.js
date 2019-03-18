import React from 'react';
import './App.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Courses from './courses/Courses';
import SummerSchool from './summerSchool/SummerSchool';
import AboutUS from './aboutUS/AboutUS';
import Contacts from './contacts/Contacts';



    const Routering = () =>{
        return(
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
        </Router>
        )
    }
       
    export default Routering;