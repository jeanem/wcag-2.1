import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends Component {
    buttonPressed(newSlide) {
        const { prevSlide, nextSlide, prevIndex, nextIndex, updateState } = this.props;

        newSlide === 'prevSlide'
        ?
        updateState(prevSlide.slide, prevSlide.title, prevSlide.shortTitle, prevSlide.number, prevSlide.level, prevSlide.detailLink, prevIndex)
        :
        updateState(nextSlide.slide, nextSlide.title, nextSlide.shortTitle, nextSlide.number, nextSlide.level, nextSlide.detailLink, nextIndex)

    }

  render() {

    return (

        <ul className="w-BtnSet">
            <li>
                <button 
                    className="w-BtnBase w-BtnPrev" 
                    onClick={ this.buttonPressed.bind(this, 'prevSlide') }
                >
                <FontAwesomeIcon title="Previous slide" icon="chevron-left" size="2x" /> 
                </button>
            </li>
            <li>
                <button 
                    className="w-BtnBase w-BtnNext" 
                    onClick={ this.buttonPressed.bind(this, 'nextSlide') }
                >
                <FontAwesomeIcon title="Next slide" icon="chevron-right" size="2x" />
                </button>
            </li>
        </ul>

    );
  }
}



export default Button;