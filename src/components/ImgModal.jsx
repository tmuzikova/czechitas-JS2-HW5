export const ImgModal = () => {
  return (
    <div
      className="modal fade"
      id="photoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="photoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="photoModalLabel">
              City Photo
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img id="modalImage" src="" alt="City" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
