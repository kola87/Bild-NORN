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
                    <li><link to="/Courses" className="menu-link">Курсы</link></li>
                    <li><link to="/Summer_school" className="menu-link">Летняя школа</link></li>
                    <li><link to="/Contacts" className="menu-link">Контакты</link></li>
                    <li><link to="/About_us" className="menu-link">О нас</link></li>
                </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/Courses" component={Courses}/>
            <Route path="/Summer_school" component={Summer_school}/>
            <Route path="/Contacts" component={Contacts}/>
            <Route path="/About_us" component={About_us}/>
                </div>
            </BrowserRouter>

           

        )
    }
}
export default Navigation;