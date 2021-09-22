import { useState } from "react";

const PlaylistModal = ({ handleClose }) => {
  const [showInput, setShowInput] = useState(false);

  const createPlaylist = () => {
    setShowInput((inputVisible) => !inputVisible);
  };
  return (
    <>
      <div
        id="modal-backDrop"
        className="modal-backdrop"
        onClick={handleClose}
      ></div>
      <div id="modal" className="modal modal-display playlist-modal">
        <header className="modal-header">
          <div className="modal-text">
            <p>Save to...</p>
            <ul>
              <li>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={true}
                    onChange={() => {}}
                  />
                  <span>Playlist 1</span>
                </label>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={createPlaylist}>
              Create new playlist
            </button>
          </div>
          <i
            className="fas fa-times"
            id="modal-hide-icon"
            onClick={handleClose}
          ></i>
        </header>
        {showInput && (
          <footer className="modal-footer">
            <div className="simple-input">
              <input
                type="text"
                name="create"
                placeholder="Enter new playlist name"
              />
            </div>
            <button className="btn btn-primary">Create</button>
          </footer>
        )}
      </div>
    </>
  );
};

export default PlaylistModal;

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

// checked={showInventoryAll}
// onChange={() =>
//   productDispatch({ type: "TOGGLE_INVENTORY" })
// }

{
  /* <button className="btn btn-primary" onClick={createPlaylist}>
Create new playlist
</button>
{showInput && (
<div className="simple-input">
  <input
    type="text"
    name="create"
    placeholder="Enter new playlist name"
  />
</div>
)} */
}

// onChange={() =>
//   productDispatch({ type: "TOGGLE_INVENTORY" })
// }
