import React, { Component } from 'react';

class TargetSize extends Component {

    render() {
        return (
            <article>
                <p>"The size of the target for pointer inputs is at least 44 by 44 CSS pixels"</p>
                <p>Examples:
                <button type="button" class="w-BtnBase">1</button>
                <button type="button" class="w-BtnBase">2</button>
                </p>
            </article>
        );
    }
}

export default TargetSize;

