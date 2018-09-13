import React from 'react';

function ContentOnHover(props) {
    const { shortWCAGLink } = props;
    return (
        <div>
            <blockquote cite= { shortWCAGLink }>Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:</blockquote>

            <ul>
                <li>User can dismiss without moving the pointer or keyboard focus - e.g. use the escape key</li>
                <li>Hoverable - additional content does not disappear when moved over.</li>
                <li>Persistent - is not time based, that is if the additional content has been triggered into a visible state via focus or hover,  it remains visible until the user removes the hover/focus or dismisses it</li>
            </ul>
        </div> 
    );
}

export default ContentOnHover;

