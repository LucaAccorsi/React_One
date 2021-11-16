import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';        // importo Store dal file store
import { Provider } from 'react-redux';     // importo Provider dalle API di Redux



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>                {/* avvolgo APP all'interno di un provider, passando store come props*/}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

