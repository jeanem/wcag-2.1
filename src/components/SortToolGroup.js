import React, { Component } from 'react';
import SortButton from './SortButton';


class SortToolGroup extends Component {
    keyBoardNav (e) { //see https://www.javascriptstuff.com/component-communication/#4-event-bubbling for why this is not on the child component
        const left = 37;
        const right = 39;
        const thisBtn = e.target;
        const nextBtn = thisBtn.nextSibling;
        const prevBtn = thisBtn.previousSibling;
        const firstBtn = thisBtn.parentNode.firstChild;
        const lastBtn = thisBtn.parentNode.lastChild;

        if (e.which === right) {
            thisBtn.tabIndex = -1;
            if (nextBtn !== null) {
                nextBtn.focus();
                nextBtn.tabIndex = 0;
            } else {
                firstBtn.focus();
                firstBtn.tabIndex = 0;
            }
        }

        if (e.which === left) {
            thisBtn.tabIndex = -1;
            if (prevBtn !== null) {
                prevBtn.focus()
                prevBtn.tabIndex = 0;
            } else {
                lastBtn.focus()
                lastBtn.tabIndex = 0;
            }
        }
    }

    render() {
        const {  btnsInfo, labelID, labelText, ariaControls, className, activeOrderByNode, activeOrderByType, activeDirection, updateState } = this.props;
        const buttons = [];
        var isPressed = false;

        btnsInfo.forEach(function (btn, index) {
            const sortGroup = btn.sortGroup;
            const btnType = btn.type;

            if (sortGroup === 'OrderByBtns') {
                isPressed = 
                    activeOrderByType === btnType
                    ?
                    true
                    :
                    false
            } else {
                isPressed = 
                    activeDirection === btn.direction
                    ?
                    true
                    :
                    false
            }
            buttons.push(
                <SortButton
                    key={ btnType }
                    id={ 'wid-OrderBy_' +  btnType }
                    sortNode={ 
                        sortGroup === "OrderByBtns"
                        ?
                        btn.node
                        :
                        activeOrderByNode
                    }
                    sortType={ 
                        sortGroup === "OrderByBtns"
                        ?
                        btnType
                        :
                        activeOrderByType
                    }
                    direction={ btn.direction }
                    sortGroup={ btn.sortGroup}
                    isPressed={ isPressed }
                    tabIndex={
                        index === 0
                        ?
                        0
                        :
                        -1
                    }
                    buttonText={ btn.btnText }
                    cssClassList={ 
                        sortGroup === "OrderByBtns"
                        ?
                        'w-BtnSort'
                        :
                        'w-BtnSort mod-' + btnType
                    }
                    updateState={updateState}
                    index={index}
                />
                );
            });

    return (
        <div>
            <p id={ labelID } className="w-BtnSort_GroupLabel">{ labelText }</p>
            <div 
                role="toolbar" 
                aria-labelledby={ labelID } 
                aria-controls={ ariaControls } 
                className={ className }
                onKeyDown={this.keyBoardNav}>
                { buttons }
            </div>
        </div>
    );

  }


}



export default SortToolGroup;