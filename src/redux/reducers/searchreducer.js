export const initialState = {
  term: null,
  loading: true,
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };
    case "SET_SEARCH_DATA":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default searchReducer;
