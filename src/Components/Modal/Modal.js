const Modal = () => {
  return (
    <>
      <div id="modal-backDrop"></div>
      <div id="modal" className="modal-hide">
        <header className="modal-header">
          <p>
            <strong>Modal title</strong>
          </p>
          <i className="fas fa-times" id="modal-hide-icon"></i>
        </header>
        <p className="modal-text">This is a centered modal</p>
        <footer className="modal-footer">
          <button id="modal-hide" className="btn btn-secondary">
            Close
          </button>
          <button className="btn btn-primary" id="modal-save">
            Save changes
          </button>
        </footer>
      </div>
    </>
  );
};

export default Modal;
