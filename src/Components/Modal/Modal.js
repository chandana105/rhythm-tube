import { useState } from "react";
import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";
import { useModal } from "../../Contexts/ModalProvider";
import { useWatchlater } from "../../hooks/useWatchlater";
import Spinner from "../Spinner";
import { useLikedVideos } from "../../hooks/useLikedVideos";

const Modal = ({
  handleClose,
  watchlater,
  likedVideosRemove,
  otherPageWatchlater,
}) => {
  const { togglePlaylistModalVisibility } = usePlaylistModal();
  const { modalData } = useModal();
  const { addToWatchlater, handleRemoveWatchlaterItem } = useWatchlater();
  const { handleRemoveLikedVideosItem, handleAddToWatchlaterFromPage } =
    useLikedVideos();
  const [watchlaterLoad, setWatchlaterLoad] = useState(false);
  const [likedVideosLoad, setLikedVideosLoad] = useState(false);

  const saveToPlaylist = () => {
    handleClose();
    togglePlaylistModalVisibility();
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
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleRemoveLikedVideosItem(modalData, setLikedVideosLoad)
                }
              >
                {likedVideosLoad ? (
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
