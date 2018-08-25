import React, { Component } from 'react';

class InputPurpose extends Component {

    render() {
        const { title, number, level } = this.props;
        return (
            <li>
                <h2>{ title }</h2>
                <p>{number} {level}</p>
            </li>
        );
    }
}

export default InputPurpose;

