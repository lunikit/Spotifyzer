import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Home from '../components/Home';


@inject('store')
@observer
class HomeContainer extends Component {
  render() {
    const { store } = this.props;
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
