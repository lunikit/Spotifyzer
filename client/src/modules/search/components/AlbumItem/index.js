import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AlbumItem = ({ album }) => (
  <div className="card">
    <img className="card-img-top" src={album.imageUrl} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">
        <Link to={`/Album/${album.id}`}>{album.name}</Link>
      </h5>
      <p className="card-text">{album.artists}</p>
    </div>
  </div>
);

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

export default AlbumItem;
