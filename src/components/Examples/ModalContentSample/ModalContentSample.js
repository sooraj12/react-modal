function ModalContentSample({ onHide }) {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Modal Header</h4>
        {/* <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onHide}
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div className="modal-body">modal body</div>

      <div className="modal-footer">
        <button className="btn btn-light" onClick={onHide}>
          Close
        </button>
        <button className="btn btn-primary" type="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export { ModalContentSample };
