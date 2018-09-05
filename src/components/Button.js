import React, { Component } from 'react';


class Button extends Component {
    buttonPressed() {
        const { slide, title, number, level, detailLink, updateState } = this.props;
        updateState(slide, title, number, level, detailLink);

    }


  render() {
    const { slide, buttonText, cssClassList } = this.props;

    return (
            <button 
                type="button" 
                id={ "wid_" + slide } 
                onClick={ this.buttonPressed.bind(this) }
                className={ 
                    cssClassList !== null
                    ?
                    cssClassList
                    :
                    null
                }
            >
                <span>{ buttonText }</span>
            </button>
    );
  }
}



export default Button;