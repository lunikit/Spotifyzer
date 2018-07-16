import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Home,
  Search,
  Header,
} from './modules';
import { PrivateRoute } from './controls';

import './App.css';


@inject('store')
@observer
class App extends Component {
  render() {
    const { store: { authStore } } = this.props;
    const { isAuthenticated } = authStore;

    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/:accessToken/:refreshToken" component={Home} />
          <PrivateRoute isAvailable={isAuthenticated} path="/Search" component={Search} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
