import React, { Component } from 'react';
import Slides from './slides/SlideIndex';

class App extends Component {
    render () {
        var type = 'InputPurpose'; // example variable - will change from user input
        const SlideToRender = Slides[type];
        return <SlideToRender/>
    }
}

export default App;