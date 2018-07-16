import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Search from '../components/Search';


@inject('store')
@observer
class SearchContainer extends Component {
  onSearch = (e) => {
    e.preventDefault();
    const { store: { searchStore } } = this.props;

    searchStore.search();
  }

  onChangeSearchText = (e) => {
    const { store: { searchStore } } = this.props;

    searchStore.changeSearchText({ text: e.target.value });
  }

  render() {
    const { store: { searchStore } } = this.props;
    const {
      text, loading, albums, isEmpty,
    } = searchStore;

    const props = {
      text,
      loading,
      onSearch: this.onSearch,
      onChangeSearchText: this.onChangeSearchText,
      albums,
      isEmpty,
    };

    return (
      <Search {...props} />
    );
  }
}

SearchContainer.propTypes = {
  store: PropTypes.object,
};

export default SearchContainer;
