import React, { Component } from 'react';

class Reflow extends Component {

    render() {
        return (
            <div>
                <p>"Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:</p>

                <ul>
                    <li>"Vertical scrolling content at a width equivalent to 320 CSS pixels;</li>
                    <li>"Horizontal scrolling content at a height equivalent to 256 CSS pixels.</li>
                </ul>
                <p>"Except for parts of the content which require two-dimensional layout for usage or meaning." (e.g. maps, data tables)</p>
            </div> 
        );
    }
}

export default Reflow;

