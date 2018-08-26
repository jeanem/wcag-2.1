import React, { Component } from 'react';

class NonTextContrast extends Component {

    render() {
        return (
            <div>
                <p>"If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:</p>

                <ul>
                    <li>"Turn off - A mechanism is available to turn the shortcut off;</li>
                    <li>"Remap - A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);</li>
                    <li>"Active only on focus - The keyboard shortcut for a user interface component is only active when that component has focus.</li>
                </ul> 
            </div> 
        );
    }
}

export default NonTextContrast;

