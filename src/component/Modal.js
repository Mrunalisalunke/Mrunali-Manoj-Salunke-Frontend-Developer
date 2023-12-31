import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
