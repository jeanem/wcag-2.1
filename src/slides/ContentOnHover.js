import React, { Component } from 'react';

class NonTextContrast extends Component {

    render() {
        return (
            <div>
                <p>Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:</p>

                <ul>
                    <li>User can dismiss without moving the pointer or keyboard focus - e.g. use the escape key</li>
                    <li>Hoverable - additional content does not disappear when moved over.</li>
                    <li>Persistent - not time based, it remains visible until the user dismisses or removes the hover or focus</li>
                </ul>
            </div> 
        );
    }
}

export default NonTextContrast;

