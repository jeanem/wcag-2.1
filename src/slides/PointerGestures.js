import React from 'react';

function PointerGestures(props) {
    const { shortWCAGLink } = props;
    return (
        <div>
            <blockquote cite= { shortWCAGLink }>All functionality that uses multipoint or path-based gestures for operation can be operated with a <strong>single pointer</strong> without a path-based gesture, unless a multipoint or path-based gesture is essential.</blockquote>

            <h3>Examples of single pointer</h3>
            <ul>
                <li>Touch screen or touch pad: taps, double taps, long presses</li>
                <li>Mouse, trackpad, head-pointer: single clicks, click-and-hold and double clicks</li>
            </ul> 
            <h3>Example of checkpoint</h3>
            <blockquote cite= { shortWCAGLink }>A web site includes a map view that supports the pinch gesture to zoom into the map content, and drag gestures to move the visible area. User interface controls offer the operation via [+] and [-] buttons to zoom in and out, and arrow buttons to pan stepwise in all directions.</blockquote>
        </div> 
    );
}

export default PointerGestures;

