import { legacy_createStore as createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducerGreetings, { getGreetings } from './reducer';

const reducer = combineReducers({
  reducerGreetings,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(getGreetings());

export default store;