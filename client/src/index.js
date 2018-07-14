import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import ShoeStore from './Store';

/*
This seems a little weird below, but we are wrapping our App component
in a special component which comes from mobx-react... this allows us
to access our ShoeStore from within the App component
*/
const Root = (
  <Provider ShoeStore={ShoeStore}>
    <App />
  </Provider>
)

// Render the Root variable we created above, not <App/>
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
