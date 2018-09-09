import React, { Component } from 'react';
//import ToolTip from './ToolTip';

class Button extends Component {
    constructor() {
        super();
        this.state = {
          hidden: true
        }; 
    }
    buttonClicked() {
        const { slide, title, shortTitle, number, level, detailLink, index, updateState } = this.props;
        updateState(slide, title, shortTitle, number, level, detailLink, index, true);

    }
    
    showTip() {
        this.setState ({
            hidden:false
        });
    }

    hideTip() {
        this.setState ({
            hidden:true
        }); 
    }
    escape(e) {//escape out of tool tip
        if (e.which === 27) {
            this.setState ({
                hidden:true
            });
            e.preventDefault();
            return false;
        }
    }

  render() {
    const { slide, shortTitle, buttonText, index, active } = this.props;
    const { hidden } = this.state;
    const tipID = "wid_ToolTip-" + slide;
    const tipStyle = {
        display: hidden ? 'none' : 'block'
      }

    return (
        <div
            onMouseOver={this.showTip.bind(this)}
            onMouseOut={this.hideTip.bind(this)}
            onFocus={this.showTip.bind(this)}
            onBlur={this.hideTip.bind(this)}
            onKeyDown={this.escape.bind(this)}
        >
            <button 
                type="button" 
                id={ "wid_" + slide } 
                className={ 
                    active === true
                    ?
                    "w-BtnBase w-ToolTipped mod-Active"
                    :
                    "w-BtnBase w-ToolTipped"
                }
                aria-describedby={tipID}
                onClick={ this.buttonClicked.bind(this) }
            >
                { buttonText }
            </button>
            <div 
                id={tipID}
                role="tooltip"
                aria-hidden={ hidden }
                className="w-ToolTip"
                style={ tipStyle }
                >
                <span className="w-VisuallyHide">{ index } </span>
                { shortTitle }
                { 
                    active === true
                    ?
                    <span className="w-VisuallyHide">Current slide</span>
                    :
                    null
                }
            </div>
        </div>
    );
  }
}



export default Button;