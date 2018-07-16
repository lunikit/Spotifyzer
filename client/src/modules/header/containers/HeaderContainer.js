import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Header from '../components/Header';


@inject('store')
@observer
class HeaderContainer extends Component {
  onLogout = (e) => {
    e.preventDefault();
    const { store: { authStore } } = this.props;

    authStore.logout();
  }

  render() {
    const { store: { authStore } } = this.props;
    const { isAuthenticated, user } = authStore;

    const props = {
      isAuthenticated,
      userName: user && user.name,
      onLogout: this.onLogout,
    };

    return (
      <Header {...props} />
    );
  }
}

HeaderContainer.propTypes = {
  store: PropTypes.object,
};

export default HeaderContainer;
