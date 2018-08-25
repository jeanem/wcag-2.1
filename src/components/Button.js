import React, { Component } from 'react';


class Button extends Component {
    buttonPressed() {
        //do stuff

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