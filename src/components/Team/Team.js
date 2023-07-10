import React, { useRef } from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import Slider from "react-slick";
import {BiLogoLinkedin} from "react-icons/bi"
import "./Team.css"

const Team = (props) => {
    const {bg}=props
    const bgp= bg ||"bg-grey";
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
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
            <section className={`${bgp} py-5`}>
                <div className="container px-lg-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex align-items-center justify-content-between mb-5'>
                            <h2 className="title">Our Experts</h2>
                            <div className="customNavigation d-flex me-lg-4">
                             <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handlePreviousSlide}><IoIosArrowBack/></butt>
                             <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handleNextSlide}><IoIosArrowForward/></butt>
                          </div>
                            </div>
                            {/* End owl custom button */}
                            <div id="owl-experts" className="owl-carousel owl-theme owl-experts clearfix">
                            <Slider {...settings} ref={sliderRef}>
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/1.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/2.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/3.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/4.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/5.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/6.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/7.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                <div className="item item-experts text-center">
                                    <div className="expert-img-container">
                                        <div className="avatar d-flex algin-items-center ">
                                            <img src="images/Experts/8.jpg" className="img-responsive" alt="profile" />
                                        </div>
                                        <a href="https://www.linkedin.com/" className="in-experts">
                                            <BiLogoLinkedin />
                                        </a>
                                    </div> {/* end expert img container */}
                                    <div className="clearfix" />
                                    <h4 className>Peter Hart</h4>
                                    <p className="job-experts">Chartered Financial Advisor</p>
                                </div>{/* end item */}
                                
                              </Slider>
                            </div> {/* End owl container */}
                        </div> {/* End col */}
                    </div>{/* End row */}
                </div>
            </section>

        </>
    )
}

export default Team