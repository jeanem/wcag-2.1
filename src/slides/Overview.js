import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>Many new checkpoints focus on mobile, e.g. responsive design is a requirement</li>
                    <li>WCAG 2.0 is still a W3C Recommendation, 2.1 extends it and is backwards compatible</li>
                </ul>
                <p><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">New features in WCAG 2.1</a></p>
            </div>
        );
    }
}

export default Overview;

