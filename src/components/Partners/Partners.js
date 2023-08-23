
import React, { useRef } from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import Slider from "react-slick";
import "./Partners.css"
const Partners = () => {
    const sliderRef = useRef(null);
    const handlePreviousSlide = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleNextSlide = () => {
        sliderRef.current.slickNext();
      };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
          <section className='bg-grey py-5 '>
              <div className="container px-lg-5">
                  <div className="row">
                      <div className=" col-sm-12 col-md-12 col-lg-12">
                        <div className='d-flex align-items-center justify-content-between'>
                        <h2 className="title">Our Partners</h2>
                          <div className="customNavigation d-flex me-lg-4">
                             <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handlePreviousSlide}><IoIosArrowBack/></butt>
                             <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handleNextSlide}><IoIosArrowForward/></butt>
                          </div>
                        </div>
                          {/* End owl button */}
                          <div id="owl-partners" className="owl-carousel owl-theme owl-partners py-4 clearfix">
                          <Slider {...settings} ref={sliderRef}>
                          <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/1.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/2.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/3.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/4.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/5.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/1.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/2.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/3.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/4.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                              <div className="item">
                                  <a href="/#">
                                      <img src="images/Partner/5.jpg" className="img-responsive" alt="/partnerimg" />
                                  </a>
                              </div>
                          </Slider>
                              
                          </div>
                      </div>{/* End row partners */}
                  </div>{/* End Row */}
              </div>
          </section>

    </>
  )
}

export default Partners