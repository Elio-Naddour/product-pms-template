import { Reducer } from 'redux';
import { ProductsState, ProductsActionTypes } from '../../types/productsTypes';
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  DELETE_SINGLE_PRODUCT,
  DELETE_SINGLE_PRODUCT_SUCCESS,
  DELETE_SINGLE_PRODUCT_FAILURE,
  ADD_SINGLE_PRODUCT,
  ADD_SINGLE_PRODUCT_FAILURE,
  ADD_SINGLE_PRODUCT_SUCCESS,
  UPDATE_SINGLE_PRODUCT,
  UPDATE_SINGLE_PRODUCT_FAILURE,
  UPDATE_SINGLE_PRODUCT_SUCCESS,
  CLEAR_PRODUCTS,
  CLEAR_CRUD_ERROR,
} from '../constants/productsConstants';

const initialState: ProductsState = {
  products: [],
  singleProduct: {
    id: 0,
    title: '',
    image: '',
    category: '',
    price: 0,
    description: '',
    rating: { rate: 0, count: 0 },
  },
  loading: false,
  error: null,
  crudLoading: false,
  crudError: null,
};

const productsReducer: Reducer<ProductsState, ProductsActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload.data };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload.data };
    case FETCH_SINGLE_PRODUCT:
      return { ...state, loading: true, error: null };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload.data || initialState.singleProduct,
      };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload.data };

    case DELETE_SINGLE_PRODUCT:
      return { ...state, crudLoading: true, crudError: null };
    case DELETE_SINGLE_PRODUCT_SUCCESS:
      //products: state.products.filter(product => product.id !== action.payload.data.id),
      return { ...state, crudLoading: false, crudError: null };
    case DELETE_SINGLE_PRODUCT_FAILURE:
      return { ...state, crudLoading: false, crudError: action.payload.data };

    case ADD_SINGLE_PRODUCT:
      return { ...state, crudLoading: true, crudError: null };
    case ADD_SINGLE_PRODUCT_SUCCESS:
      return { ...state, crudLoading: false, crudError: null };
    case ADD_SINGLE_PRODUCT_FAILURE:
      return { ...state, crudLoading: false, crudError: action.payload.data };

    case UPDATE_SINGLE_PRODUCT:
      return { ...state, crudLoading: true, crudError: null };
    case UPDATE_SINGLE_PRODUCT_SUCCESS:
      return { ...state, crudLoading: false, crudError: null };
    case UPDATE_SINGLE_PRODUCT_FAILURE:
      return { ...state, crudLoading: false, crudError: action.payload.data };

    case CLEAR_PRODUCTS:
      return { ...state, products: [] };
    case CLEAR_CRUD_ERROR:
      return { ...state, crudError: null };

    default:
      return state;
  }
};

export default productsReducer;
