import React, { Component } from 'react';
import Slides from './slides/SlideIndex';
import Button from './components/Button';
import './App.css';


class App extends Component {
    render () {

      const slidesInfo = [
        {'slide': 'Orientation', 'title':'Orientation', 'number':'1.3.4', 'level':'AA', 'detailLink':'orientation.html', 'cssClassList':'w-BtnBase w-NavList_Btn' }, 
        {'slide': 'InputPurpose', 'title':'Input purpose', 'number':'1.3.5', 'level':'AA', 'detailLink':'','cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'TargetSize', 'title':'Target size', 'number':'2.5.5', 'level':'AAA', 'detailLink':'target-size.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'TextSpacing', 'title':'Text spacing', 'number':'1.4.2', 'level':'AA', 'detailLink':'text-spacing.html', 'cssClassList':'w-BtnBase w-NavList_Btn'}
      ];

        const slides = [];
        const navList = [];
        const navPrevNext = [];
        var SlideToRender;

        slidesInfo.forEach(function (slideInfo, index) {
          const slide = slideInfo.slide;
          const title = slideInfo.title;
          const number = slideInfo.number;
          const level = slideInfo.level;
          const detailLink = slideInfo.detailLink;
          const cssClassList = slideInfo.cssClassList;

          SlideToRender = Slides[slide];
          slides.push (<SlideToRender title={ title } number={ number } level = { level } order = { index + 1 } detailLink = { detailLink } /> )
          navList.push(<li><Button slide={ slide } buttonText= { index + 1 } cssClassList= { cssClassList } /></li>)
        });

      return (
        <div>
          <nav class="w-SlideNav" aria-label="Slide navigation">[TODO: dynamically generate]
            <ul>
              { navList }
            </ul>
          </nav>
          <main>
            <h1>WCAG 2.1</h1>
            <ul class="w-SlidesContainer">
              { slides }
            </ul>
            <ul class="w-SlideControls">
              <li><button slide="button">Previous placeholder</button></li>
              <li><button slide="button">Next placeholder</button></li>
            </ul>
          </main>
        </div>
      )
    }
}

export default App;