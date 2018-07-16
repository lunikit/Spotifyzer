import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Album from '../components/Album';


@inject('store')
@observer
class AlbumContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { store: { albumStore } } = this.props;

    albumStore.loadAlbum({ id });
  }

  componentWillUnmount() {
    const { store: { albumStore } } = this.props;

    albumStore.reset();
  }


  render() {
    const { store: { albumStore } } = this.props;

    const props = {
      album: albumStore.album,
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
