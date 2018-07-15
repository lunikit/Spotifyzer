import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
} from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAvailable, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAvailable ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    ))
      }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

export default PrivateRoute;
