import React from 'react';
import PropTypes from 'prop-types';

import AlbumItem from '../AlbumItem';


const AlbumList = ({ albums, isEmpty }) => (
  <div className="card-columns">
    { albums.map(item => <AlbumItem key={item.id} album={item} />) }
  </div>
);

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

export default AlbumList;
