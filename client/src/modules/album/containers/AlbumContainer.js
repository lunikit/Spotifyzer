import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Album from '../components/Album';


@inject('store')
@observer
class AlbumContainer extends Component {
  render() {
    const { store: { authStore } } = this.props;

    const props = {
    };

    return (
      <Album {...props} />
    );
  }
}

AlbumContainer.propTypes = {
  store: PropTypes.object,
};

export default AlbumContainer;
