import { Reducer } from 'redux';
import {
  CategoriesActionTypes,
  CategoriesState,
} from '../../types/categoriesTypes';
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_SUCCESS,
} from '../constants/categoriesConstants';

const initialState: CategoriesState = {
  categories: [],

  loading: false,
  error: null,
};

const categoriesReducer: Reducer<CategoriesState, CategoriesActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload.data };
    case FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default categoriesReducer;
