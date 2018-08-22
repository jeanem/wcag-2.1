import React, { Component } from 'react';
import SortToolGroup from './SortToolGroup';


class SortToolsContainer extends Component {
    constructor(props) {
        super(props); //super -- inherits methods from Components; we still want the normal things the react component does, but also do our custom state

        this.state = {//defaults active control onload
                activeOrderByNode: 'OpenDate',
                activeOrderByType: 'Date',
                activeDirection: 'desc'

        };
        this.updateState = this.updateState.bind(this);
    }

    updateState( activeOrderByNode, activeOrderByType, activeDirection) {
        const { orderResults } = this.props;

        orderResults(activeOrderByNode, activeOrderByType, activeDirection);
        this.setState ({
            activeOrderByNode: activeOrderByNode,
            activeOrderByType: activeOrderByType,
            activeDirection: activeDirection
        });
    }

    render() {
        const { activeOrderByNode, activeOrderByType, activeDirection } = this.state;
        const orderByData = [
                            {'type': 'Date', 'btnText':'Open date', 'node':'OpenDate', 'direction': 'desc', 'sortGroup':'OrderByBtns'}, 
                            {'type': 'Title', 'btnText':'Position title', 'node':'JobTitle', 'direction': 'asc', 'sortGroup':'OrderByBtns'}, 
                            {'type': 'Department', 'btnText':'Department','node':'DeptUnitName', 'direction':'asc', 'sortGroup':'OrderByBtns'}
                        ];
        const directionData=[
                            {'type': 'Ascending', 'btnText':'Ascending','node':null, 'direction':'asc', 'sortGroup':'DirectionBtns'},
                            {'type': 'Descending', 'btnText':'Descending','node':null, 'direction':'desc', 'sortGroup':'DirectionBtns'}
                        ];
        return (
            <div className="w-BtnSort_Container" >
                <SortToolGroup
                    key={ "sortby"}
                    btnsInfo={ orderByData }
                    role="toolbar"
                    labelID="wid-SortBy_Title"
                    labelText="Sort by"
                    ariaControls="wid-ResultsContainer" 
                    className="w-BtnSort_Group"
                    activeOrderByNode={ activeOrderByNode }
                    activeOrderByType={ activeOrderByType }
                    activeDirection={ activeDirection }
                    updateState={this.updateState}
                />
                <SortToolGroup
                    key={ "sortdirection" }
                    btnsInfo={ directionData }
                    role="toolbar"
                    labelID="wid-Direction_Title"
                    labelText="Sort direction"
                    ariaControls="wid-ResultsContainer" 
                    className="w-BtnSort_Group"
                    activeOrderByNode={ activeOrderByNode }
                    activeOrderByType={ activeOrderByType }
                    activeDirection={ activeDirection }
                    updateState={this.updateState}
                />
            </div>
        );
    }
}


export default SortToolsContainer;