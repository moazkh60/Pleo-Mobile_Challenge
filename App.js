import React, {Component} from 'react';
import Router from './src/router/Router';
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
