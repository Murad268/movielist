import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import './reset.css';
import App from './App';
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
  )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}><App /></Provider>
);

