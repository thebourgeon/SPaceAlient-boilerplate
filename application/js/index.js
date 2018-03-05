// Depends
import React from 'react';
import ReactDom from 'react-dom';

// Modules
import { createStore, applyMiddleware } from 'redux';

// https://github.com/zalmoxisus/redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

import { createBrowserHistory } from 'history';

import { syncHistoryWithStore } from 'react-router-redux';

import thunk from 'redux-thunk';

// Self Modules
import reducers from 'redux/reducers';
import Root from 'containers/Root';

// Creates a Redux store that holds the
// complete state tree of your app.
// https://redux.js.org/docs/api/createStore.html
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// Simply listen to the enhanced history
// This takes in a function that will receive a
// location any time the store updates.
// https://www.npmjs.com/package/react-router-redux
const history = syncHistoryWithStore(
  createBrowserHistory(),
  store
);

// Render component to Dom
ReactDom.render(
  <Root history={ history } store={ store } />,
  document.getElementById('root')
);