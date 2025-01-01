import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from "src/store/constants/categoriesConstants";
import { errorResponse } from "./apiTypes";


  export interface CategoriesState {
  categories: string[];
  loading: boolean;
  error: errorResponse | null;

}

export type FetchCategoriesAction = {
  type: typeof FETCH_CATEGORIES;
  payload: {
    request;
  };
};
export type FetchCategoriesSuccessAction = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: { data: string[] };
};
export type FetchCategoriesFailureAction = {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: { data: errorResponse };
};

export type CategoriesActionTypes =
  | FetchCategoriesSuccessAction
  | FetchCategoriesAction
  | FetchCategoriesFailureAction;