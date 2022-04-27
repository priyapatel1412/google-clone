export const getSearchTerm = (term) => {
  return {
    type: "SET_SEARCH_TERM",
    term,
  };
};

export const setSearchData = (data) => {
  return {
    type: "SET_SEARCH_DATA",
    data,
  };
};
