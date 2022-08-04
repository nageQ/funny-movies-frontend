import React from "react";
import Modal from "react-modal";
import closeIcon from "asset/close-circle.svg";
import "./styles.scss";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(35, 38, 47, 0.3)",
  },
  content: {
    backgroundColor: "white",
    borderRadius: "24px",
    // width: "30%",
    marginTop: "500px",
  },
};

export default function ModalContainer(props) {
  const { title, closeModal, modalIsOpen, children } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className="styes-modals"
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-header__title">{title}</div>
          <img
            src={closeIcon}
            className="modal-header__close"
            onClick={closeModal}
            alt="close"
          />
        </div>
        <div className="line"></div>
        {children}
      </div>
    </Modal>
  );
}
