import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {
  Home,
  Search,
} from './modules';
import { PrivateRoute } from './controls';

import './App.css';


@inject('store')
@observer
class App extends Component {
  render() {
    const { store: { testStore } } = this.props;

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Search">Search</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <PrivateRoute isAvailable={false} path="/Search" component={Search} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
