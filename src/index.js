import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import './reset.css';
import App from './App';
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}><App /></Provider>,
  </React.StrictMode>
);

