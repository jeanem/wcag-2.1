import React, { Component } from 'react';
import Slides from './slides/SlideIndex';
import Button from './components/Button';
import PrevNext from './components/PrevNext';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight, faChevronLeft)

class App extends Component {
    constructor() {
      super();
      this.state = {
        currentSlide: 'Overview',
        currentTitle: 'Overview',
        currentNumber: null,
        currentLevel: null,
        currentDetailLink: null,
        index: 0
      };
      this.updateState = this.updateState.bind(this);
    }
    updateState( currentSlide, currentTitle, currentNumber, currentLevel, currentDetailLink, index) {
      this.setState ({
          currentSlide: currentSlide,
          currentTitle: currentTitle,
          currentNumber: currentNumber,
          currentLevel: currentLevel,
          currentDetailLink: currentDetailLink,
          index: index
      });
    }

    render () {
      const { currentSlide, currentTitle, currentNumber, currentLevel, currentDetailLink, index } = this.state;
      const slidesInfo = [
        {'slide': 'Overview', 'title':'Overview', 'number':null, 'level':null, 'detailLink':null },
        {'slide': 'Orientation', 'title':'Orientation', 'number':'1.3.4', 'level':'AA', 'detailLink':'orientation.html' },
        {'slide': 'Reflow', 'title':'Reflow (responsive web design)', 'number':'1.4.10', 'level':'AA', 'detailLink':'reflow.html' },
        {'slide': 'InputPurpose', 'title':'Input purpose', 'number':'1.3.5', 'level':'AA', 'detailLink':'identify-input-purpose.html'},
        {'slide': 'IdentifyPurpose', 'title':'Identify purpose', 'number':'1.3.6', 'level':'AAA', 'detailLink':'identify-purpose.html'},
        {'slide': 'LabelInName', 'title':'Label in name', 'number':'2.5.3', 'level':'A', 'detailLink':'label-in-name.html'},
        {'slide': 'TargetSize', 'title':'Target size', 'number':'2.5.5', 'level':'AAA', 'detailLink':'target-size.html'},
        {'slide': 'NonTextContrast', 'title':'Non-text contrast', 'number':'1.4.1', 'level':'AA', 'detailLink':'non-text-contrast.html'},
        {'slide': 'TextSpacing', 'title':'Text spacing', 'number':'1.4.2', 'level':'AA', 'detailLink':'text-spacing.html'},
        {'slide': 'ContentOnHover', 'title':'Content on hover or focus', 'number':'1.4.13', 'level':'AA', 'detailLink':'content-on-hover-or-focus.html'},
        {'slide': 'CharacterKeyShortcuts', 'title':'Character key shortcuts', 'number':'2.1.4', 'level':'A', 'detailLink':'character-key-shortcuts.html'},
        {'slide': 'PointerGestures', 'title':'Pointer gestures', 'number':'2.5.1', 'level':'A', 'detailLink':'pointer-gestures.html'},
        {'slide': 'PointerCancellation', 'title':'Pointer cancellation', 'number':'2.5.2', 'level':'A', 'detailLink':'pointer-cancellation.html'},
        {'slide': 'MotionActuation', 'title':'Motion actuation', 'number':'2.5.4', 'level':'A', 'detailLink':'motion-actuation.html'}
      ];
    
    let prevIndex;
    let nextIndex;
    const totalSlides = slidesInfo.length;

    index === 0
    ?
    prevIndex = totalSlides - 1
    :
    prevIndex = index - 1


    index === totalSlides - 1
    ?
    nextIndex = 0
    :
    nextIndex = index + 1

    console.warn(index, prevIndex, nextIndex, slidesInfo[index].slide);
    var WCAGLink =  <p><a href={"https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink }>{ currentTitle } {currentNumber} ({currentLevel}) details and exceptions</a></p>;
    var shortWCAGLink = "https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink;
    var SlideToRender = Slides[currentSlide] = require('./slides/' + currentSlide).default;
    var navList = slidesInfo.map( (slideInfo, index) => {
      return (
        <li key={ slideInfo.slide }>
          <Button 
            slide={ slideInfo.slide }
            title= { slideInfo.title }
            number= { slideInfo.number }
            level= { slideInfo.level }
            detailLink= { slideInfo.detailLink }
            index = { index }
            buttonText= { index + 1 } 
            cssClassList="w-BtnBase"
            updateState={this.updateState} />
        </li>
      );
    });
      return (
        <div>

        <main>
          <h1>WCAG 2.1 highlights</h1> 
        
          <nav className="w-SlideNav" aria-label="Slide menu">
          <ul className="w-BtnSet">         
            { navList }
          </ul>
        </nav>
        <PrevNext 
          prevSlide = { slidesInfo[prevIndex] }
          nextSlide = { slidesInfo[nextIndex] }
          prevIndex = { prevIndex }
          nextIndex= { nextIndex }
          updateState={ this.updateState }
        />
          <ul className="w-SlidesContainer">
            <li key={ currentSlide } >
              <h2 id={"wid-SlideTitle_" +  currentSlide }>{ currentTitle }</h2>
                <SlideToRender  shortWCAGLink = { shortWCAGLink } />
                { 
                currentNumber != null
                ?
                WCAGLink
                :
                null 
                }
            </li>
          </ul>

        </main>
      </div>
      )
    }
}

export default App;