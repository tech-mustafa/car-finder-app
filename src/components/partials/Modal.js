import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = (props) => {
  const closeModal = (e) => {
    props.closeModal(e);
  };

  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "80%",
      borderRadius: "20px",
    },
  };
  return (
    <div className="modal-wrapper">
      <ReactModal isOpen={true} style={customStyles}>
        <div className="modal-left">
          <img
            src={props.image}
            alt={props.imageId}
            width="100%"
            height="100%"
          />
        </div>
        <div className="modal-right">
          <div className="modal-header">
            <h5 class="modal-title">{props.searchQuery}</h5>
            <button
              type="button"
              className="close close-modal"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Model Price:- <span>&#8377; {props.price} Lakh</span>
            </p>
            <p>Brand: {props.searchQuery.split(" ")[0].toLowerCase()}</p>
            <p>Model: {props.searchQuery.split(" ")[1].toLowerCase()}</p>
            <p>Posted Date: {props.publishedDate}</p>
          </div>
          <div className="modal-footer">
          <button type="button" class="btn btn-primary" onClick={closeModal}>Done</button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
