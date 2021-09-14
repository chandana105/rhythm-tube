const Modal = () => {
  return (
    <>
      <div id="modal-backDrop"></div>
      <div id="modal" class="modal-hide">
        <header class="modal-header">
          <p>
            <strong>Modal title</strong>
          </p>
          <i class="fas fa-times" id="modal-hide-icon"></i>
        </header>
        <p class="modal-text">This is a centered modal</p>
        <footer class="modal-footer">
          <button id="modal-hide" class="btn btn-secondary" >
            Close
          </button>
          <button class="btn btn-primary" id="modal-save">
            Save changes
          </button>
        </footer>
      </div>
    </>
  );
};


export default Modal
