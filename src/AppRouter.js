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