import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import {
  Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {
  Home,
  Search,
  Header,
} from './modules';
import { PrivateRoute } from './controls';

import './App.css';

const history = createBrowserHistory();


@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    const { store: { authStore } } = this.props;

    authStore.init();
  }

  render() {
    const { store: { authStore } } = this.props;
    const { isAuthenticated, isInited } = authStore;

    if (!isInited) {
      return null;
    }

    return (
      <Router history={history}>
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
