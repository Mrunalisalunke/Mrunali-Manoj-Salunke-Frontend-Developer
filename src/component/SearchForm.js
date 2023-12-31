import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [status, setStatus] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    onSearch({ status, launchDate, type });

    setStatus('');
    setLaunchDate('');
    setType('');
  };

  return (
    <div className="falcon-container relative">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <h1 class="text-primary text-4xl font-bold z-10">
        SpaceX Capsules
    </h1>
    <p class="text-primary text-lg z-10">
        The most powerful operational rocket
    </p>
</div>

                 
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
      <div style={{ marginBottom: '20px',width: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f8f8f8', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center', color: '#333' }}>Search Capsules</h1>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '0.875rem',fontWeight: 'bold', marginBottom: '5px', color: '#555' }} htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: '100%', padding: '8px',fontWeight: 'bold', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '0.875rem',fontWeight: 'bold', marginBottom: '5px', color: '#555' }} htmlFor="launchDate">Launch Date:</label>
          <input
            type="text"
            id="launchDate"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '0.875rem',fontWeight: 'bold', marginBottom: '5px', color: '#555' }} htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}
          />
        </div>
        <button
          onClick={handleSearch}
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out' }}
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
