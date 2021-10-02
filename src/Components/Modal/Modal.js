import { useState } from "react";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import { useModal } from "../../Contexts/ModalProvider";
import { useWatchlater } from "../../hooks/useWatchlater";
import Spinner from "../Spinner";
import { useLikedVideos } from "../../hooks/useLikedVideos";
import { useAuth } from "../../Contexts/AuthProvider";
import { Toast } from "../Toast";
import { usePlaylists } from "../../hooks/usePlaylists";
import { useParams } from "react-router";

const Modal = ({
  handleClose,
  watchlater,
  likedVideosRemove,
  playlistVideoRemove,
  otherPageWatchlater,
  handleRemovePlaylistVideo,
}) => {
  const { togglePlaylistModalVisibility } = usePlaylistModal();
  const { modalData, toggleModalVisibility } = useModal();
  const { addToWatchlater, handleRemoveWatchlaterItem } = useWatchlater();
  const { handleRemoveLikedVideosItem, handleAddToWatchlaterFromPage } =
    useLikedVideos();
  const [watchlaterLoad, setWatchlaterLoad] = useState(false);
  const [likedVideosLoad, setLikedVideosLoad] = useState(false);
  const { token } = useAuth();
  const [playlistRemoveLoad, setPlaylistRemoveLoad] = useState(false);

  const saveToPlaylist = () => {
    if (token) {
      handleClose();
      togglePlaylistModalVisibility();
    } else {
      Toast("Save to playlist after signing in, Please Sign in!");
    }
  };

  const handleRemoveLike = async () => {
    await handleRemoveLikedVideosItem(modalData, setLikedVideosLoad);
    toggleModalVisibility();
  };

  return (
    <>
      <div
        id="modal-backDrop"
        className="modal-backdrop"
        onClick={handleClose}
      ></div>
      <div id="modal" className="modal modal-display">
        {!watchlater && (
          <header className="modal-header">
            <div className="modal-text">
              <button
                className="btn btn-primary"
                onClick={() => {
                  !otherPageWatchlater
                    ? addToWatchlater(modalData, setWatchlaterLoad)
                    : handleAddToWatchlaterFromPage(
                        modalData,
                        setWatchlaterLoad
                      );
                }}
              >
                {watchlaterLoad ? (
                  <Spinner type="ThreeDots" color=" #fff" height={20} />
                ) : (
                  "Save to Watch Later"
                )}
              </button>
            </div>
          </header>
        )}
        <footer
          className={`modal-footer ${watchlater && "watchlater-footer"}`}
          id="footer"
        >
          <div className="modal-text">
            <button className="btn btn-primary" onClick={saveToPlaylist}>
              Save to playlist
            </button>
          </div>
          {watchlater && (
            <div className="modal-text">
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleRemoveWatchlaterItem(modalData, setWatchlaterLoad)
                }
              >
                {watchlaterLoad ? (
                  <Spinner type="ThreeDots" color=" #fff" height={20} />
                ) : (
                  "Remove Video"
                )}
              </button>
            </div>
          )}
          {likedVideosRemove && (
            <div className="modal-text">
              <button className="btn btn-primary" onClick={handleRemoveLike}>
                {likedVideosLoad ? (
                  <Spinner type="ThreeDots" color=" #fff" height={20} />
                ) : (
                  "Remove Video"
                )}
              </button>
            </div>
          )}

          {playlistVideoRemove && (
            <div className="modal-text">
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleRemovePlaylistVideo(
                    modalData._id,
                    setPlaylistRemoveLoad
                  )
                }
              >
                {playlistRemoveLoad ? (
                  <Spinner type="ThreeDots" color=" #fff" height={20} />
                ) : (
                  "Remove Video"
                )}
              </button>
            </div>
          )}
        </footer>
      </div>
    </>
  );
};

export default Modal;

{
  /* <footer className="modal-footer">
<button id="modal-hide" className="btn btn-secondary">
  Close
</button>
<button className="btn btn-primary" id="modal-save">
  Save changes
</button>
</footer> */
}
