// Base redux routing combine
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Helper function turns an object whose values are
// different reducing functions into a single reducing
// https://redux.js.org/docs/api/combineReducers.html
export default combineReducers({
  routing: routerReducer
});
