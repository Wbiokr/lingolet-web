import * as redux from 'redux';
import thunk from 'redux-thunk';
import common from './common';

const { createStore, applyMiddleware, combineReducers } = redux as any;

export default createStore(combineReducers({
  common,
}),applyMiddleware(thunk));
