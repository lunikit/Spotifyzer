import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import Search from '../components/Search';


@inject('store')
@observer
class SearchContainer extends Component {
  render() {
    const { store } = this.props;
    const props = {
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
