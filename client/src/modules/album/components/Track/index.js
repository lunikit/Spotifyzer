import React from 'react';
import PropTypes from 'prop-types';


const Track = ({ item }) => (
  <li className="list-group-item">{ `${item.trackNumber}. ${item.name}` }</li>
);

Track.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Track;
