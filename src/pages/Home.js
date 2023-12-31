import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {
    const carouselOptions = {
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000, 
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    };
    return (
        <div>
            {/* Carousel */}
            <div className="container-fluid p-0 mb-5">
                <OwlCarousel className="header-carousel position-relative" {...carouselOptions}>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="images/img10.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-white text-white mb-3 animated slideInDown">Recent Launch</h5>
                                        <h1 className="display-3 text-white animated slideInDown">STARLINK MISSION</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">As the world's leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations.</p>
                                        <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href="/form" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="images/img1.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-white text-white mb-3 animated slideInDown">Upcoming Launch</h5>
                                        <h1 className="display-3 text-white animated slideInDown">FALCON-9 MISSION</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">As the world's leading provider of launch services – and the only provider with an orbital class reusable rocket – SpaceX has deep experience with both spacecraft and on-orbit operations.</p>
                                        <a href="/about" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href="/form" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
             </div>
        </div>
    );
}

export default Home;
