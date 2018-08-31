import React from 'react';

function CharacterKeyShortcuts(props) {
    const { shortWCAGLink } = props;
    return (
        <div>
            <blockquote cite= { shortWCAGLink }>If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:</blockquote>

            <ul>
                <li>Can be turned off</li>
                <li>Can be remapped to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);</li>
                <li>The keyboard shortcut for a user interface component is only active when that component has focus, like a moving through a select element using letters to move among choices. <cite><a href="https://knowbility.org/blog/2018/WCAG21-214CharacterKeyShortcuts/"> See knowbility.org.</a></cite>


                </li>
                <li>Accesskeys are not affected because they include modifier keys</li>
            </ul> 
        </div> 
    );
}

export default CharacterKeyShortcuts;