import React from 'react';
import Team from './Team';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="images/img6.jpg" 
                alt=""
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h2 className="section-title bg-white text-start text-primary pe-3">About Us</h2>
            <h1 className="mb-4">Welcome to SpaceX</h1>
           
            <p className="mb-4">
            Development, manufacturing, testing, and launch of SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – takes place at Starbase in Texas. One of the world’s first commercial spaceports designed for orbital missions, launches from Starbase will provide access to destinations in Earth orbit, the Moon, Mars, and beyond.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Starlink</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Dragon</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Falcon-9</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Starshield</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Falcon Heavy</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Ride Share</p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/contact">Read More</a>
          </div>
        </div>
        <Team/>
      </div>
    </div>
    
  );
}

export default About;
