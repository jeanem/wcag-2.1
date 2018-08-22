import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Context from './slides/Context';


const MainMenu = () => {
  return (
    <div>
      <Link to="/slides/Context">
        <button>Context API</button>
      </Link>
    </div>
  );
};


<ul class="slidenav">
  <li>
    <button class="current" data-slide="0">
      <span class="visuallyhidden">News</span> 1
      <span class="visuallyhidden">(Current Slide)</span>
    </button>
  </li>
  <li>
    <button data-slide="1">
      <span class="visuallyhidden">News</span> 2
    </button>
  </li>
  <li>
    <button data-slide="2">
      <span class="visuallyhidden">News</span> 3
    </button>
  </li>
</ul>


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav className="App-header">
              <MainMenu/>
          </nav>
          <div>
            <Route exact path="/slides/Context" component={Context} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;