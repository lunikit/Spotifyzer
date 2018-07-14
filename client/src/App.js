import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';


@inject('ShoeStore')
@observer
class App extends Component {
  render() {
    const { ShoeStore } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React { ShoeStore.text }</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <a href="http://localhost:5000/login" className="btn btn-primary">Log in with Spotify</a>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  ShoeStore: PropTypes.object.isRequired,
};

export default App;
