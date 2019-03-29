import React, { Component } from 'react';
import MainpBlocksGirl from './Body/MainpBlocksGirl';
import MainBlock2Black from './Body/MainBlock2Black';
import MainBlock3Squares from './Body/MainBlock3Squares';
import MainHeader from './Header/MainHeader';
import MainBlock4SeaSlider from './Body/MainBlock4SeaSlider';
import MainFooterAria from './Footer/MainFooterAria';
import MainFooterMap from './Footer/MainFooterMap';




class PageMain extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <MainHeader />
        </header>
        <body>
          <MainpBlocksGirl />
          <MainBlock2Black />
          <MainBlock3Squares />
          <MainBlock4SeaSlider />
          <MainFooterAria />
          <MainFooterMap />
        </body>
        <footer>
        
        </footer>
      </div>
    )
  }
}

export default PageMain;