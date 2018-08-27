import React, { Component } from 'react';

class TargetSize extends Component {

    render() {
        const { shortWCAGLink } = this.props;
        return (
            <div>
                <blockquote cite= { shortWCAGLink }>The size of the target for pointer inputs is at least 44 by 44 CSS pixels</blockquote>
                <p>Examples:
                <button type="button" className="w-BtnBase">1</button>
                <button type="button" className="w-BtnBase">2</button>
                </p>
            </div>
        );
    }
}

export default TargetSize;

