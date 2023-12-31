import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCapsules, setFilteredCapsules } from './redux/actions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NewNavbar from './pages/NewNavbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import SearchForm from './component/SearchForm';
import DataGrid from './component/DataGrid';
import Modal from './component/Modal'; 
import CapsuleDetailsPopup from './component/ItemPopup';
import Login from './middleware/Login';
import './styles/tailwind.css';


const App = () => {
  const dispatch = useDispatch();
  const localCapsules = useSelector((state) => state.capsules);
  const filteredCapsules = useSelector((state) => state.filteredCapsules);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [setCurrentPage] = useState(1); // Add the missing state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/capsules');
        dispatch(setCapsules(response.data));
        dispatch(setFilteredCapsules(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = ({ status, launchDate, type }) => {
    const filtered = localCapsules.filter((capsule) => {
      const lowerStatus = capsule.status ? capsule.status.toLowerCase() : '';
      const lowerLaunchDate = capsule.original_launch ? capsule.original_launch.toLowerCase() : '';
      const lowerType = capsule.type ? capsule.type.toLowerCase() : '';

      return (
        lowerStatus.includes(status.toLowerCase()) &&
        lowerLaunchDate.includes(launchDate.toLowerCase()) &&
        lowerType.includes(type.toLowerCase())
      );
    });

    dispatch(setFilteredCapsules(filtered));
  };

  const handlePageChange = (pageNumber) => {
    const totalPages = Math.ceil(localCapsules.length / 10);
    const newPage = Math.min(Math.max(pageNumber, 1), totalPages);

    setCurrentPage(newPage); // Fix the use of setCurrentPage
  };

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const handleClosePopup = () => {
    setSelectedCapsule(null);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <NewNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/form"
            element={
              <div>
                <SearchForm onSearch={handleSearch} />
                <DataGrid
                  capsules={filteredCapsules}
                  onPageChange={handlePageChange}
                  onCapsuleClick={handleCapsuleClick}
                />
                {selectedCapsule && (
                  <Modal onClose={handleClosePopup}>
                    <CapsuleDetailsPopup capsule={selectedCapsule} onClose={handleClosePopup} />
                  </Modal>
                )}
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
