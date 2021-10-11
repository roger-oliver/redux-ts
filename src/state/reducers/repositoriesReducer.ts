import { SearchRepositoriesActionType, SearchRepositoriesAction } from "../action-types";

interface RepositoriesState {
  loading: boolean,
  error: string | null,
  data: string[]
};

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: RepositoriesState = initialState, action: SearchRepositoriesAction): RepositoriesState => {
  switch (action.type) {
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_LOADING:
      return { loading: true, error: null, data: []};
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload};
    case SearchRepositoriesActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: []};
    default:
      return state;
  }
};

export default reducer;