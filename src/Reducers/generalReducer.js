export const generalReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WATCHLATER_DATA":
      return {
        ...state,
        watchlater: action.payload || [],
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: state.watchlater.concat({ ...action.payload }),
      };
    case "REMOVE_ITEM_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: state.watchlater.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case "FETCH_LIKEDVIDEOS_DATA":
      return {
        ...state,
        likedVideos: action.payload || [],
      };
    case "ADD_TO_LIKEDVIDEOS":
      return {
        ...state,
        likedVideos: state.likedVideos.concat({ ...action.payload }),
      };
    case "REMOVE_ITEM_FROM_LIKEDVIDEOS":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
