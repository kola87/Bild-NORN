import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';




const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>Главная страница</h2>
    </div>
)
const Courses = () => (
    <div>
        <h2>Курсы</h2>
    </div>
)
const Summer_school = () => (
    <div>
        <h2>Летняя школа</h2>
    </div>
)
const Contacts = () => (
    <div>
        <h2>Контакты</h2>
    </div>
)
const About_us = () => (
    <div>
        <h2>О нас</h2>
    </div>
)
class Navigation extends React.Component{

    render(){
        return(
            <BrowserRouter history = {history}>
            <div>
                <ul>
                    <li><link to="/" className="menu_link_overline">Главная страница</link></li>
                    <li><link to="/PageCourses" className="menu-link">Курсы</link></li>
                    <li><link to="/PageSummerSchool" className="menu-link">Летняя школа</link></li>
                    <li><link to="/PageContacts" className="menu-link">Контакты</link></li>
                    <li><link to="/PageAboutUS" className="menu-link">О нас</link></li>
                </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/PageCourses" component={Courses}/>
            <Route path="/PageSummerSchool" component={Summer_school}/>
            <Route path="/PageContacts" component={Contacts}/>
            <Route path="/PageAboutUS" component={About_us}/>
                </div>
            </BrowserRouter>

           

        )
    }
}
export default Navigation;