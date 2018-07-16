import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from '../SearchForm';
import AlbumList from '../AlbumList';


const Search = ({ text, loading, onSearch, onChangeSearchText, albums, isEmpty }) => (
  <div className="">
    <h1 className="">Search</h1>
    <SearchForm text={text} loading={loading} onSearch={onSearch} onChangeSearchText={onChangeSearchText} />
    <AlbumList albums={albums} isEmpty={isEmpty} />
  </div>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChangeSearchText: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};

export default Search;
