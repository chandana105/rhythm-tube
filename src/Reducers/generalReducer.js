import { act } from "react-dom/test-utils";

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
    case "FETCH_ALL_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload || [],
      };
    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.concat({ ...action.payload }),
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((singlePlaylist) =>
          singlePlaylist._id === action.payload._id
            ? {
                ...singlePlaylist,
                playlistVideos: action.payload.playlistVideos,
              }
            : { ...singlePlaylist }
        ),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((singlePlaylist) =>
          singlePlaylist._id === action.payload.deletedFromPlaylist._id
            ? {
                ...singlePlaylist,
                playlistVideos: singlePlaylist.playlistVideos.filter(
                  (video) => video._id !== action.payload.deletedVideo._id
                ),
              }
            : { ...singlePlaylist }
        ),
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist._id !== action.payload._id
        ),
      };
    // case "FETCH_PLAYLIST":
    //   return {
    //     ...state,
    //     playlist: state.playlists.find(
    //       (playlist) => playlist._id === action.payload._id
    //     ),
    //   };
    default:
      return state;
  }
};

// playlists : state.playlists.map((singlePlaylist) =>
// singlePlaylist._id === action.payload.deletedFromPlaylist._id ? {...singlePlaylist, playlistVideos : singlePlaylist.playlistVideos.filter(video) => video._id !== action.payload.deletedVideo._id} : {...singlePlaylist})
