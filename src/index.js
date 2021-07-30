import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {fetchRates} from './store/api-action';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './styles/index.scss';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

store.dispatch(fetchRates());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
