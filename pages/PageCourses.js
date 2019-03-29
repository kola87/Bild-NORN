import React, { Component } from 'react';
import '../App.css';

import CoursesHeader from './Header/CoursesHeader';
import Courses_9_Squars from './Body/Courses_9_Squars';
import CoursesContainer_6_Blocks from './Body/CoursesContainer_6_Blocks';
import CoursesContainerShedulare from './Body/CoursesContainerShedulare';
import CoursesFooterAria from './Footer/CoursesFooterAria';



class PageCourses extends Component {
  render() {
    return (
      <div className="Courses">
        <header>
          <CoursesHeader/>
        </header>
        <body>
        <Courses_9_Squars/>
        <CoursesContainer_6_Blocks/>
        <CoursesContainerShedulare/>
        </body>
        <footer>
          <CoursesFooterAria/>
        </footer>
      </div>
    );
  }
}

export default PageCourses;