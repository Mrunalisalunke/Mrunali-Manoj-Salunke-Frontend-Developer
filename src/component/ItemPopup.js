import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CapsuleDetailsPopup extends Component {
  render() {
    const { capsule, onClose } = this.props;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">{capsule.capsule_serial} Details</h2>
          <p>Status: {capsule.status}</p>
          <p>Original Launch: {capsule.original_launch}</p>
          <p>Type: {capsule.type}</p>
          <button onClick={onClose} className="mt-4 bg-blue-500 text-dark p-2 rounded">
            Close
          </button>
        </div>
      </div>
    );
  }
}

CapsuleDetailsPopup.propTypes = {
  capsule: PropTypes.shape({
    capsule_serial: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    original_launch: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CapsuleDetailsPopup;
