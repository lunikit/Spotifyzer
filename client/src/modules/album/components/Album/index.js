import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';


const Album = ({ album }) => {
  if (!album) {
    return null;
  }

  return (
    <div className="">
      <h1 className="">{ album.name }</h1>
      <div className="row">
        <div className="card col-6">
          <img className="card-img-top" src={album.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{album.artists}</p>
          </div>
        </div>
        <div className="col-6">
          <ul className="list-group">
            { album.tracks.map(item => <Track key={item.id} item={item} />) }
          </ul>
        </div>
      </div>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object,
};

export default Album;
