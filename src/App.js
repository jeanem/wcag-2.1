import React, { Component } from "react";
import Slides from "./slides/SlideIndex";
import Button from "./components/Button";
import PrevNext from "./components/PrevNext";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faChevronLeft);

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: "Overview",
      currentTitle: "Overview",
      currentShortTitle: "Overview",
      currentNumber: null,
      currentLevel: null,
      currentDetailLink: null,
      index: 0,
      slideFocus: false
    };
    this.updateState = this.updateState.bind(this);
    this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
  }
  updateState(
    currentSlide,
    currentTitle,
    currentShortTitle,
    currentNumber,
    currentLevel,
    currentDetailLink,
    index,
    slideFocus
  ) {
    this.setState({
      currentSlide: currentSlide,
      currentTitle: currentTitle,
      currentShortTitle: currentShortTitle,
      currentNumber: currentNumber,
      currentLevel: currentLevel,
      currentDetailLink: currentDetailLink,
      index: index,
      slideFocus: slideFocus
    });
    if (slideFocus === true) {
      this.focusedSlide.current.focus();
    }
  }

  render() {
    const {
      currentSlide,
      currentTitle,
      currentNumber,
      currentLevel,
      currentDetailLink,
      index
    } = this.state;
    const slidesInfo = [
      {
        slide: "Overview",
        title: "Overview",
        shortTitle: "Overview",
        number: null,
        level: null,
        detailLink: null
      },
      {
        slide: "Orientation",
        title: "Orientation",
        shortTitle: "Orientation",
        number: "1.3.4",
        level: "AA",
        detailLink: "orientation.html"
      },
      {
        slide: "Reflow",
        title: "Reflow (responsive web design)",
        shortTitle: "Reflow",
        number: "1.4.10",
        level: "AA",
        detailLink: "reflow.html"
      },
      {
        slide: "InputPurpose",
        title: "Input purpose",
        shortTitle: "Input purpose",
        number: "1.3.5",
        level: "AA",
        detailLink: "identify-input-purpose.html"
      },
      {
        slide: "IdentifyPurpose",
        title: "Identify purpose",
        shortTitle: "Identify purpose",
        number: "1.3.6",
        level: "AAA",
        detailLink: "identify-purpose.html"
      },
      {
        slide: "LabelInName",
        title: "Label in name",
        shortTitle: "Label in name",
        number: "2.5.3",
        level: "A",
        detailLink: "label-in-name.html"
      },
      {
        slide: "TargetSize",
        title: "Target size",
        shortTitle: "Target size",
        number: "2.5.5",
        level: "AAA",
        detailLink: "target-size.html"
      },
      {
        slide: "NonTextContrast",
        title: "Non-text contrast",
        shortTitle: "Non-text contrast",
        number: "1.4.1",
        level: "AA",
        detailLink: "non-text-contrast.html"
      },
      {
        slide: "TextSpacing",
        title: "Text spacing",
        shortTitle: "Text spacing",
        number: "1.4.2",
        level: "AA",
        detailLink: "text-spacing.html"
      },
      {
        slide: "ContentOnHover",
        title: "Content on hover or focus",
        shortTitle: "Content on hover/focus",
        number: "1.4.13",
        level: "AA",
        detailLink: "content-on-hover-or-focus.html"
      },
      {
        slide: "CharacterKeyShortcuts",
        title: "Character key shortcuts",
        shortTitle: "Character shortcuts",
        number: "2.1.4",
        level: "A",
        detailLink: "character-key-shortcuts.html"
      },
      {
        slide: "PointerGestures",
        title: "Pointer gestures",
        shortTitle: "Pointer Gestures",
        number: "2.5.1",
        level: "A",
        detailLink: "pointer-gestures.html"
      },
      {
        slide: "PointerCancellation",
        title: "Pointer cancellation",
        shortTitle: "Pointer cancellation",
        number: "2.5.2",
        level: "A",
        detailLink: "pointer-cancellation.html"
      },
      {
        slide: "MotionActuation",
        title: "Motion actuation",
        shortTitle: "Motion actuation",
        number: "2.5.4",
        level: "A",
        detailLink: "motion-actuation.html"
      }
    ];

    let prevIndex;
    let nextIndex;
    const totalSlides = slidesInfo.length;

    index === 0 ? (prevIndex = totalSlides - 1) : (prevIndex = index - 1);

    index === totalSlides - 1 ? (nextIndex = 0) : (nextIndex = index + 1);

    var WCAGLink = (
      <a
        href={
          "https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink
        }
      >
        {currentTitle} {currentNumber} ({currentLevel}) details and exceptions
      </a>
    );
    var shortWCAGLink =
      "https://www.w3.org/WAI/WCAG21/Understanding/" + currentDetailLink;
    var SlideToRender = (Slides[currentSlide] = require("./slides/" +
      currentSlide).default);
    var navList = slidesInfo.map((slideInfo, index) => {
      return (
        <li key={slideInfo.slide} className="w-TipContainer">
          <Button
            slide={slideInfo.slide}
            title={slideInfo.title}
            shortTitle={slideInfo.shortTitle}
            number={slideInfo.number}
            level={slideInfo.level}
            detailLink={slideInfo.detailLink}
            index={index}
            buttonText={index + 1}
            updateState={this.updateState}
            active={slideInfo.slide === currentSlide ? true : false}
          />
        </li>
      );
    });
    return (
      <div>
        <main>
          <div id="wid-HeaderNavBlock">
            <h1>WCAG 2.1 highlights</h1>

            <nav className="w-SlideNav" aria-label="Slide menu">
              <ul className="w-BtnSet">{navList}</ul>
            </nav>
          </div>
          <PrevNext
            prevSlide={slidesInfo[prevIndex]}
            nextSlide={slidesInfo[nextIndex]}
            prevIndex={prevIndex}
            nextIndex={nextIndex}
            updateState={this.updateState}
          />
          <ul className="w-SlidesContainer">
            <li key={currentSlide} tabIndex="-1" ref={this.focusedSlide}>
              <h2 id={"wid-SlideTitle_" + currentSlide}>{currentTitle}</h2>
              <SlideToRender shortWCAGLink={shortWCAGLink} />

              <p>{currentNumber != null ? WCAGLink : null}</p>
              <span aria-live="polite" aria-atomic="true">
                Slide {index + 1} of {totalSlides}
              </span>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
