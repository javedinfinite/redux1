import React, { Component } from 'react';
import Counter from './Counter';
import store from './store/';
import {Provider} from "react-redux";
//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
//changes on branch
// dfvsdvvv
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Counter />
      </Provider>
    );
  }
}
export default App;
