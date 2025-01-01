import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './rootReducer';
import https from '../middlewares/https';

const middleware = [thunk, https];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;