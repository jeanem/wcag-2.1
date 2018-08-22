import React, { Component } from 'react';


class SortButton extends Component {
    constructor(props) {
        super(props); //super -- inherits methods from Components; we still want the normal things the react component does, but also do our custom state
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed() {
        const { sortNode, sortType, direction, updateState } = this.props;

        updateState( sortNode, sortType, direction);

    }

  render() {
    const { id, isPressed, tabIndex, buttonText, cssClassList } = this.props;

    return (
            <button 
                type="button" 
                id={ id } 
                aria-label={"Sort results by " + buttonText}
                onClick={ this.buttonPressed.bind(this) }
                tabIndex={ tabIndex }
                className={ 
                    cssClassList !== null
                    ?
                    cssClassList
                    :
                    null
                }
                aria-pressed={ isPressed }
            >
                <span>{ buttonText }</span>
            </button>
    );
  }
}



export default SortButton;