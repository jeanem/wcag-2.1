import React from 'react';

function NonTextContrast(props) {
    const { shortWCAGLink } = props;
    return (
            <div>
                <blockquote cite= { shortWCAGLink }>The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):</blockquote>

            <ul>
                <li>User Interface Components
                    <ul>
                        <li>The focus here is the contrast of the component with the background color</li>
                        <li>See buttons on this page for examples. The <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#examples">WCAG details page </a>and <a href="https://knowbility.org/blog/2018/WCAG21-1411Contrast/">knowability.org</a> have good examples of all technique variations.</li>
                    </ul>
                </li>
                <li>Graphical Objects, e.g. info graphics</li>
            </ul>

        </div> 
    );
}

export default NonTextContrast;

