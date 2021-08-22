import React from "react";
import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "./Context";

const Modal = () => {
  const { modal, setModal } = useGlobalContext();

  return (
    <div className={`${modal ? "modal-mask show" : "modal-mask"}`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button onClick={() => setModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
