function SidebarContentSample({ onHide }) {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Sidebar Header</h4>
      </div>
      <div className="modal-body">sidebar body</div>

      <div className="modal-footer">
        <button className="btn btn-light" onClick={onHide}>
          Close
        </button>
        <button className="btn btn-primary" type="button">
          Submit
        </button>
      </div>
    </>
  );
}

export { SidebarContentSample };
