import React, {Component} from 'react';
import '../App.css';
import Provider from '../providers';
import Consumer from '../consumer';
import ContextAPI from './ContextAPI';

//https://auth0.com/blog/react-context-api-managing-state-with-ease/

class Context extends Component {

  render() {

    return (
        <Provider>
            <Consumer>
                <ContextAPI />
            </Consumer>
        </Provider>

    );
  }
}


export default Context;