import React from 'react';

function MotionActuation(props) {
    const { shortWCAGLink } = props;
    return (
        <div>
            <blockquote cite= { shortWCAGLink }>Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.</blockquote>
        

            <ul>
                <li>for example, an action triggered by shaking or tilting can also be operated by conventional user controls</li>
                <li>and/or the user can turn off the shaking or tilting features</li>
            </ul>

        </div> 
    );
}

export default MotionActuation;

