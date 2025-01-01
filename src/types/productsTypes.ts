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
} from '../store/constants/productsConstants';
import { errorResponse, request } from './apiTypes';

export interface BaseProducts {
  title: string;
  image: string;
  category: string;
  price: number;
  description: string;
}

export interface Products extends BaseProducts {
  id: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsState {
  products: Products[];
  singleProduct: Products;
  loading: boolean;
  error: errorResponse | null;
  crudLoading: boolean;
  crudError: errorResponse | null;
}

export type FetchProductsAction = {
  type: typeof FETCH_PRODUCTS;
  payload: {
    request;
  };
};
export type FetchProductsSuccessAction = {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: { data: Products[] };
};
export type FetchProductsFailureAction = {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: { data: errorResponse };
};

export type FetchSingleProductAction = {
  type: typeof FETCH_SINGLE_PRODUCT;
  payload: {
    request;
  };
};
export type FetchSingleProductSuccessAction = {
  type: typeof FETCH_SINGLE_PRODUCT_SUCCESS;
  payload: { data: Products };
};
export type FetchSingleProductFailureAction = {
  type: typeof FETCH_SINGLE_PRODUCT_FAILURE;
  payload: { data: errorResponse };
};

export type DeleteSingleProductAction = {
  type: typeof DELETE_SINGLE_PRODUCT;
  payload: {
    request;
  };
};
export type DeleteSingleProductSuccessAction = {
  type: typeof DELETE_SINGLE_PRODUCT_SUCCESS;
  payload: string;
};
export type DeleteSingleProductFailureAction = {
  type: typeof DELETE_SINGLE_PRODUCT_FAILURE;
  payload: { data: errorResponse };
};

export type AddSingleProductAction = {
  type: typeof ADD_SINGLE_PRODUCT;
  payload: {
    request: request<BaseProducts>;
  };
};
export type AddSingleProductSuccessAction = {
  type: typeof ADD_SINGLE_PRODUCT_SUCCESS;
  payload: Object;
};
export type AddSingleProductFailureAction = {
  type: typeof ADD_SINGLE_PRODUCT_FAILURE;
  payload: { data: errorResponse };
};

export type UpdateSingleProductAction = {
  type: typeof UPDATE_SINGLE_PRODUCT;
  payload: {
    request: request<BaseProducts>;
  };
};
export type UpdateSingleProductSuccessAction = {
  type: typeof UPDATE_SINGLE_PRODUCT_SUCCESS;
  payload: Object;
};
export type UpdateSingleProductFailureAction = {
  type: typeof UPDATE_SINGLE_PRODUCT_FAILURE;
  payload: { data: errorResponse };
};

export type CleareProductsAction = {
  type: typeof CLEAR_PRODUCTS;
};
export type CleareCrudErrorAction = {
  type: typeof CLEAR_CRUD_ERROR;
};
export type ProductsActionTypes =
  | FetchProductsSuccessAction
  | FetchProductsAction
  | FetchProductsFailureAction
  | FetchSingleProductAction
  | FetchSingleProductSuccessAction
  | FetchSingleProductFailureAction
  | DeleteSingleProductAction
  | DeleteSingleProductSuccessAction
  | DeleteSingleProductFailureAction
  | AddSingleProductAction
  | AddSingleProductSuccessAction
  | AddSingleProductFailureAction
  | UpdateSingleProductAction
  | UpdateSingleProductSuccessAction
  | UpdateSingleProductFailureAction
  | CleareProductsAction
  | CleareCrudErrorAction;
