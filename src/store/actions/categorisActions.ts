
import { getCategoriesApi } from '../../utils/apiEndpoints';
import { FetchCategoriesAction } from 'src/types/categoriesTypes';
import { FETCH_CATEGORIES } from '../constants/categoriesConstants';

export const fetchCategories = (): FetchCategoriesAction => ({
  type: FETCH_CATEGORIES,
  payload: {
    request: {
      url: getCategoriesApi,
      method: 'get',
    },
  },
});
