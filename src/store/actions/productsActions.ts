import {
  ADD_SINGLE_PRODUCT,
  CLEAR_PRODUCTS,
  DELETE_SINGLE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  UPDATE_SINGLE_PRODUCT,
  CLEAR_CRUD_ERROR
} from '../constants/productsConstants';
import {
  AddSingleProductAction,
  CleareCrudErrorAction,
  CleareProductsAction,
  DeleteSingleProductAction,
  FetchProductsAction,
  FetchSingleProductAction,
  UpdateSingleProductAction,
} from '../../types/productsTypes';
import { getProductsApi } from '../../utils/apiEndpoints';

export const fetchProducts = (): FetchProductsAction => ({
  type: FETCH_PRODUCTS,
  payload: {
    request: {
      url: getProductsApi, // `${getProductsApi}?limit=5&page=3`,
      method: 'get',
    },
  },
});

export const fetchSingleProduct = (id: string): FetchSingleProductAction => ({
  type: FETCH_SINGLE_PRODUCT,
  payload: {
    request: {
      url: `${getProductsApi}/${id}`,
      method: 'get',
    },
  },
});

export const deleteSingleProduct = (id: string): DeleteSingleProductAction => ({
  type: DELETE_SINGLE_PRODUCT,
  payload: {
    request: {
      url: `${getProductsApi}/${id}`,
      method: 'delete',
    },
  },
});

export const addSingleProduct = (
  title: string,
  price: number,
  description: string,
  image: string,
  category: string
): AddSingleProductAction => ({
  type: ADD_SINGLE_PRODUCT,
  payload: {
    request: {
      url: getProductsApi,
      method: 'post',
      data: {
        title,
        price,
        description,
        image,
        category,
      },
    },
  },
});

export const updateSingleProduct = (
  id: string,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string
): UpdateSingleProductAction => ({
  type: UPDATE_SINGLE_PRODUCT,
  payload: {
    request: {
      url: `${getProductsApi}/${id}`,
      method: 'put',
      data: {
        title,
        price,
        description,
        image,
        category,
      },
    },
  },
});

export const clearProducts = (): CleareProductsAction => ({
  type: CLEAR_PRODUCTS,
});
export const clearCrudError = (): CleareCrudErrorAction => ({
  type: CLEAR_CRUD_ERROR,
});