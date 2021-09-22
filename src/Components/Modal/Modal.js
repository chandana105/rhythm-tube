import { usePlaylistModal } from "../../Contexts/PlaylistModalProvider";

const Modal = ({ handleClose }) => {
  const { togglePlaylistModalVisibility } = usePlaylistModal();

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
        <header className="modal-header">
          <div className="modal-text">
            <button className="btn btn-primary">Save to Watch Later</button>
            {/* <button className="btn btn-primary" onClick={saveToPlaylist}>
              Save to playlist
            </button> */}
          </div>
        </header>
        <footer className="modal-footer" id="footer">
          <div className="modal-text">
            <button className="btn btn-primary" onClick={saveToPlaylist}>
              Save to playlist
            </button>
          </div>
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
