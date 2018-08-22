import React, { Component } from 'react';

class LoadingGraphic extends Component {

    render() {
        return (
            <div>
                <p className="w-Loader">
                    <i className="fa fa-cog fa-spin w-fa-6x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
                </p>
                <div className="w-Overlay"></div>
            </div>
        );
    }
}

export default LoadingGraphic;

