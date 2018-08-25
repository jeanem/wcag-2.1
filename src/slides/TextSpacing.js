import React, { Component } from 'react';

class TextSpacing extends Component {

    render() {
        const { title, number, level, detailLink } = this.props;
        return (
            <li>
                <h2>{ title }</h2>
                <p>"In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:"</p>

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

export default TextSpacing;

