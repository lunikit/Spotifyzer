import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './store';
import './index.css';


const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
