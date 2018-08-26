import React, { Component } from 'react';

class LabelInName extends Component {

    render() {
        return (
            <div>
                <p>"For user interface components with labels that include text or images of text, the name contains the text that is presented visually."</p>

                <ul>
                    <li>Name, in this context, is the accessible name <strong>not</strong> the name attribute on input elements</li>
                    <li>An accessible name is used by assistive technology to identify the control, e.g. aria-label, alt tag, aria-labelledby </li>
                    <li>Good examples on <a href="https://knowbility.org/blog/2018/WCAG21-253LabelInName/">knowbility.org</a></li>
                </ul>
            </div> 
        );
    }
}

export default LabelInName;

