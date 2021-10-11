import axios from 'axios';
import { Dispatch } from 'react';
import { SearchRepositoriesAction, SearchRepositoriesActionType } from '../action-types';


export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<SearchRepositoriesAction>) => {
    dispatch({
      type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_LOADING
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term
          }
        }
      );
      const names = data.objects.map((item: any) => item.package.name)
      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (error: any) {
      dispatch({
        type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message
      }) 
    }
  }
}