export enum SearchRepositoriesActionType {
  SEARCH_REPOSITORIES_LOADING = 'search_repositories_loading',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
};

interface SearchRepositoriesLoadingAction {
    type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_LOADING
};

interface SearchRepositoriesSuccessAction {
    type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
};

interface SearchRepositoriesErrorAction {
    type: SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string
};

export type SearchRepositoriesAction =
    | SearchRepositoriesLoadingAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;