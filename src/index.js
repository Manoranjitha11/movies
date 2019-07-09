import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from './store.js'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// const store = createStore(rootReducer);
const initialState = {};
const enhancers = [];
let middleware = [
    thunk,
    routerMiddleware(history),
    // socketMiddleware,
  ];
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );
const store = createStore(rootReducer, initialState, composedEnhancers);

ReactDOM.render(<Provider store={store}>
<App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
