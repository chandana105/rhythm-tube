export const videoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_ALL_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "SEARCH_BY_VIDEO_TITLE":
      return {
        ...state,
        searchBy: action.payload,
      };
    case "SHOW_LOADER":
      return {
        ...state,
        showLoader: !state.showLoader,
      };
    default:
      return state;
  }
};
