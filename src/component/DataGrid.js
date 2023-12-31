import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CapsuleGrid = ({ capsules, onCapsuleClick }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  
  if (!capsules || capsules.length === 0) {
    return <div>No capsules available</div>;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCapsules = capsules.slice(startIndex, endIndex);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', width: '100%' }}>
          {displayedCapsules.map((capsule) => (
            <div
              key={capsule.capsule_serial}
              onClick={() => onCapsuleClick(capsule)}
              style={{
                flex: '0 0 25%',
                boxSizing: 'border-box',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '0.25rem',
                margin: '0.5rem',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
                textAlign: 'center',
                backgroundColor: 'black',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              className="hover:shadow-md"
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {capsule.capsule_serial}
              </h3>
              <p>Status: {capsule.status}</p>
              <p>
                Original Launch:{' '}
                {new Date(capsule.original_launch).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p>Type: {capsule.type}</p>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {capsules.length > itemsPerPage && (
          <div style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &lt;&lt; Prev
            </button>
            <span style={{ margin: '0 0.5rem' }}>Page {currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= capsules.length}
            >
              Next &gt;&gt;
            </button>
          </div>
        )}
      </div>
    </>
  );
};

CapsuleGrid.propTypes = {
  capsules: PropTypes.arrayOf(
    PropTypes.shape({
      capsule_serial: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      original_launch: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
  onCapsuleClick: PropTypes.func.isRequired,
};

export default CapsuleGrid;
