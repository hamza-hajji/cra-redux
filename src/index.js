import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({
  // TODO: initial value
  data: {
    value: 'Intial Value'
  }
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
