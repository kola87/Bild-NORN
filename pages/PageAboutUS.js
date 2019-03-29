
import React, {Component} from 'react';
import PagesMenu from './PagesMenu';
import AboutUS from './Body/AboutUS';

class PageAboutUS extends Component {
 render(){
     return <div> 
         <PagesMenu />
         <h2>page About us </h2>
         <AboutUS />
     </div>
 }
}

export default PageAboutUS;