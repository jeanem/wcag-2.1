import React, { Component } from 'react';

class PointerGestures extends Component {

    render() {
        return (
            <div>
                <p>"For functionality that can be operated using a single pointer, at least one of the following is true:"</p>
                <ul>
                    <li>There is no down-event, event is only activated on the up event (like a standard click event)</li> 
                    <li>If there is a down event it can be aborted, undone, or reversed on the up event.</li>
                    <li>An exception might be a game or piano app where execution on the down event is crucial</li>
                </ul>
            </div> 
        );
    }
}

export default PointerGestures;

