import React, { Component } from 'react';

class Reflow extends Component {

    render() {
        const { shortWCAGLink } = this.props;
        return (
            <div>
                <blockquote cite= { shortWCAGLink }>Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: </blockquote>

                <ul>
                    <li>Vertical scrolling content (horizontally written languages like English) at a width equivalent to 320 CSS pixels</li>
                    <li>Horizontal scrolling content (vertically written languages) at a height equivalent to 256 CSS pixels</li>
                    <li>Prevents scrolling in more than one direction or hiding content for small screens and larger screens zoomed to 400% </li>
                    <li>Examples of exceptions are maps, data tables, etc. that rely on two-dimensional layout or meaning</li>
                </ul>


            </div> 
        );
    }
}

export default Reflow;

