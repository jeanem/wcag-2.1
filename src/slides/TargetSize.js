import React, { Component } from 'react';

class TargetSize extends Component {

    render() {
        const { title, number, level, detailLink } = this.props;
        return (
            <li>
                <h2>{ title }</h2>
                <p>"The size of the target for pointer inputs is at least 44 by 44 CSS pixels"</p>
                <p>See the navigation buttons</p> 

                <p><a href={"https://www.w3.org/WAI/WCAG21/Understanding/" + detailLink }>{ title } {number} ({level}) details and exceptions</a></p>
            </li>
        );
    }
}

export default TargetSize;

