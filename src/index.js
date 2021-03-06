import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store/store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store = {StoreInstance}>
  <App />
  </Provider>,
  document.getElementById('root')
);
