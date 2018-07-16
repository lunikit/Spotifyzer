import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Home from '../components/Home';


@inject('store')
@observer
class HomeContainer extends Component {
  componentDidMount() {
    const { accessToken, refreshToken } = this.props.match.params;
    const { store: { authStore } } = this.props;

    if (!authStore.isAuthenticated && accessToken && refreshToken) {
      authStore.login({
        accessToken,
        refreshToken,
      });
    }
  }

  render() {
    const props = {
    };

    return (
      <Home {...props} />
    );
  }
}

HomeContainer.propTypes = {
  store: PropTypes.object,
};

export default HomeContainer;
