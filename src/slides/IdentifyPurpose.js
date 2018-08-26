import React, { Component } from 'react';

class IdentifyPurpose extends Component {

    render() {
        return (
            <div>
                <p>"In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined."</p>

                <ul>
                    <li>Includes use of ARIA Landmarks (which is already a required technique for a couple of level A items) to identify regions of the page </li>
                    <li>and in addition uses other semantic and microdata markup to implement the checkpoint</li>
                    <li>"This success criteria requires the author to add the context, propose, and meaning of symbols, regions, buttons, links, and fields so that user agents knows what they do and can adapt them to make them understandable for the user." </li>
                </ul>
            </div> 
        );
    }
}

export default IdentifyPurpose;

