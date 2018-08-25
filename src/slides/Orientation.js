import React, { Component } from 'react';

class Orientation extends Component {

    render() {
        const { title, number, level, detailLink } = this.props;
        return (
            <li>
                <h2>{ title }</h2>
                <p>"Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential."</p>

                <ul>
                   <li> Line height (line spacing) to at least 1.5 times the font size;</li>
                    <li>Spacing following paragraphs to at least 2 times the font size;</li>
                    <li>Letter spacing (tracking) to at least 0.12 times the font size;</li>
                    <li>Word spacing to at least 0.16 times the font size.</li>
                </ul>


                <p><a href={"https://www.w3.org/WAI/WCAG21/Understanding/" + detailLink }>{ title } {number} ({level}) details and exceptions</a></p>
            </li>
        );
    }
}

export default Orientation;

