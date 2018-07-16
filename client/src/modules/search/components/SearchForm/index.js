import React from 'react';
import PropTypes from 'prop-types';


const SearchForm = ({ text, loading, onSearch, onChangeSearchText }) => (
  <form id="searchForm" onSubmit={onSearch}>
    <div className="form-group row">
      <div className="col-sm-10">
        <input onChange={onChangeSearchText} value={text} type="text" className="form-control" placeholder="Type something to start search" />
      </div>
      <div className="col-sm-2">
        <button type="submit" form="searchForm" value="Submit" className="btn btn-outline-primary">{ loading ? "Loading..." : "Search" }</button>
      </div>
    </div>
  </form>
);

SearchForm.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChangeSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
