import React, { Component } from 'react';
import Counter from './Counter';
import store from './store/';
import {Provider} from "react-redux";

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
