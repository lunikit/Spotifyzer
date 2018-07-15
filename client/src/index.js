import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
// import App from './App';
import store from './store';
import './index.css';
import Home from './modules/home';
// import Search from './modules/search';


const Root = (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
