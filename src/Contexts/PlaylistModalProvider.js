import { createContext, useContext, useState } from "react";

const PlaylistModalContext = createContext();

export const usePlaylistModal = () => {
  return useContext(PlaylistModalContext);
};

export const PlaylistModalProvider = ({ children }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const togglePlaylistModalVisibility = () => {
    setShowPlaylistModal((visibility) => !visibility);
  };

  return (
    <PlaylistModalContext.Provider
      value={{ showPlaylistModal, togglePlaylistModalVisibility }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};
