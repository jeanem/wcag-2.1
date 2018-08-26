import React, { Component } from 'react';

class PointerGestures extends Component {

    render() {
        return (
            <div>
                <p>"All functionality that uses multipoint or path-based gestures for operation can be operated with a <strong>single pointer</strong> without a path-based gesture, unless a multipoint or path-based gesture is essential."</p>

                <p>Examples of single pointer</p>
                <ul>
                    <li>Touch screen or touch pad: taps, double taps, long presses</li>
                    <li>Mouse, trackpad, head-pointer: single clicks, click-and-hold and double clicks</li>
                </ul> 
                <p>Example: "A web site includes a map view that supports the pinch gesture to zoom into the map content, and drag gestures to move the visible area. User interface controls offer the operation via [+] and [-] buttons to zoom in and out, and arrow buttons to pan stepwise in all directions."</p>
            </div> 
        );
    }
}

export default PointerGestures;

