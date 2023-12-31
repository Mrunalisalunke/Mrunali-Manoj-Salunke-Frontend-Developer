import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NewNavbar from './pages/NewNavbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import './styles/tailwind.css';

const App = () => {
return (
    <Router>
      <div className="container mx-auto p-4">
        <NewNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
