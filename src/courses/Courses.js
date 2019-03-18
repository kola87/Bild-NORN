import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

import Header_courses from './Header/Header_courses';
import Nine_Squars from './Body/9_squars';
import Container_6_Blocks from './Body/Container_6_Blocks';
import Container_Shedulare from './Body/container_shedulare';
import Footer_Aria_Courses from './Footer/footer_aria_courses';



class Courses extends Component {
  render() {
    return (
      <div className="Courses">
        <header>
          <Header_courses/>
        </header>
        <body>
        <Nine_Squars/>
        <Container_6_Blocks/>
        <Container_Shedulare/>
        </body>
        <footer>
          <Footer_Aria_Courses/>
        </footer>
      </div>
    );
  }
}

export default Courses;