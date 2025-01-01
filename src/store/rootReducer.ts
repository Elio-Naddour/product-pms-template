import { combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import categoriesReducer from './reducers/categoriesReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
