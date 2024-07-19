import { useState } from "react";
import { useData } from "../../Contexts/DataProvider";
import { useModal } from "../../Contexts/ModalProvider";
import Spinner from "../Spinner";
import { usePlaylists } from "../../hooks/usePlaylists";

const PlaylistModal = ({ handleClose }) => {
  const [showInput, setShowInput] = useState(false);
  const [createPlaylistLoad, setCreatePlaylistLoad] = useState(false);
  const [playlistRemoveLoad, setPlaylistRemoveLoad] = useState(false);

  const [playlistName, setPlaylistName] = useState("");
  const { playlists } = useData();
  const { modalData } = useModal();
  const { createNewPlaylist, addToPlaylist, removeFromPlaylist } =
    usePlaylists();
  const [playlistAddLoad, setPlaylistAddLoad] = useState('');
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
        <header className="modal-header" id="playlist-header">
          <div className="modal-text">
            {playlists.length === 0 ? (
              <p style={{ marginBottom: "1rem" }}>NO PLAYLISTS FOUND</p>
            ) : (
              <>
                <p>Save to...</p>
                <ul>
                  {/* is videopreset shouldebekept as global  */}
                  {playlists.map(({ _id, name, playlistVideos }) => {
                    const isVideoPresent = playlistVideos.some(
                      (item) => item._id === modalData._id
                    );
                    return (
                      <li key={_id}>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={isVideoPresent}
                            onChange={() => {
                              !isVideoPresent
                                ? addToPlaylist(
                                    _id,
                                    modalData._id,
                                    setPlaylistAddLoad
                                  )
                                : removeFromPlaylist(
                                    _id,
                                    modalData._id,
                                    setPlaylistRemoveLoad
                                  );
                            }}
                          />
                          <span>
                            {name}{" "}
                            {playlistRemoveLoad && (
                              <Spinner
                                type="Oval"
                                color="#a78bfa"
                                height={20}
                              />
                            )}
                             { playlistAddLoad === _id && (
                              <Spinner
                                type="Oval"
                                color="#a78bfa"
                                height={20}
                              />
                            )}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
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
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() =>
                createNewPlaylist(
                  playlistName,
                  setPlaylistName,
                  modalData,
                  setCreatePlaylistLoad
                )
              }
            >
              {createPlaylistLoad ? (
                <Spinner type="ThreeDots" color=" #fff" height={20} />
              ) : (
                "Create"
              )}
            </button>
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
