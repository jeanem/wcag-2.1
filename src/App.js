import React, { Component } from 'react';
import Slides from './slides/SlideIndex';
//import Button from './components/Button';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        currentSlide: 'Overview',
        nextSlide: 'Orientation',
        prevSlide: ''
      };
    }
    render () {

      const slidesInfo = [
        {'slide': 'Overview', 'title':'Overview', 'number':null, 'level':null, 'detailLink':null, 'cssClassList':'w-BtnBase w-NavList_Btn' },
        {'slide': 'Orientation', 'title':'Orientation', 'number':'1.3.4', 'level':'AA', 'detailLink':'orientation.html', 'cssClassList':'w-BtnBase w-NavList_Btn' },
        {'slide': 'Reflow', 'title':'Reflow', 'number':'1.4.10', 'level':'AA', 'detailLink':'reflow.html', 'cssClassList':'w-BtnBase w-NavList_Btn' },
        {'slide': 'InputPurpose', 'title':'Input purpose', 'number':'1.3.5', 'level':'AA', 'detailLink':'identify-input-purpose.html','cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'IdentifyPurpose', 'title':'Identify purpose', 'number':'1.3.6', 'level':'AAA', 'detailLink':'identify-purpose.html','cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'LabelInName', 'title':'Label in name', 'number':'2.5.3', 'level':'A', 'detailLink':'label-in-name.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'TargetSize', 'title':'Target size', 'number':'2.5.5', 'level':'AAA', 'detailLink':'target-size.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'NonTextContrast', 'title':'Non-text contrast', 'number':'1.4.1', 'level':'AA', 'detailLink':'non-text-contrast.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'TextSpacing', 'title':'Text spacing', 'number':'1.4.2', 'level':'AA', 'detailLink':'text-spacing.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'ContentOnHover', 'title':'Content on Hover or Focus', 'number':'1.4.13', 'level':'AA', 'detailLink':'content-on-hover-or-focus.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'CharacterKeyShortcuts', 'title':'Character Key Shortcuts', 'number':'2.1.4', 'level':'A', 'detailLink':'character-key-shortcuts.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'PointerGestures', 'title':'Pointer Gestures', 'number':'2.5.1', 'level':'A', 'detailLink':'pointer-gestures.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'PointerCancellation', 'title':'Pointer Cancellation', 'number':'2.5.2', 'level':'A', 'detailLink':'pointer-cancellation.html', 'cssClassList':'w-BtnBase w-NavList_Btn'},
        {'slide': 'MotionActuation', 'title':'Motion Actuation', 'number':'2.5.4', 'level':'A', 'detailLink':'motion-actuation.html', 'cssClassList':'w-BtnBase w-NavList_Btn'}
      ];

        const slides = [];
        const navList = [];
        //const navPrevNext = [];
        var SlideToRender;

        slidesInfo.forEach(function (slideInfo, index) {
          const slide = slideInfo.slide;
          const title = slideInfo.title;
          const number = slideInfo.number;
          const level = slideInfo.level;
          const detailLink = slideInfo.detailLink;
          const cssClassList = slideInfo.cssClassList;
          var WCAGLink =  <p><a href={"https://www.w3.org/WAI/WCAG21/Understanding/" + detailLink }>{ title } {number} ({level}) details and exceptions</a></p>

          SlideToRender = Slides[slide];
          slides.push (
            <div className="w-Slide" key={ slide } >
                <h2 id={"wid-SlideTitle_" +  slide }>{ title }</h2>
                  <SlideToRender />
                { 
                  number != null
                  ?
                  WCAGLink
                  :
                  null 
                }
            </div>
           )
          //(slide version) navList.push(<li key={ slide }><Button slide={ slide } buttonText= { index + 1 } cssClassList= { cssClassList } /></li>)
          //use this in JSX instead of existing nav: <nav className="w-SlideNav" aria-label="Slide menu">[TODO: dynamically generate]
          navList.push(<li key={ slide }><a href={"#wid-SlideTitle_" + slide}>{ title }</a> </li>)
        });

      return (
        <div>
          <main>
            <h1>WCAG 2.1 new features</h1>
            <nav className="w-Anchors" aria-labelledby="wid-MenuTitle">
            <h2 id="wid-MenuTitle">Content menu</h2>
              <ul>
                { navList }
              </ul>
            </nav>
            <div className="w-SlidesContainer">
              { slides }
            </div>
          </main>
        </div>
      )
    }
}

export default App;