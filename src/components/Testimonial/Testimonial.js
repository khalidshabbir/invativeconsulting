import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import "./Testimonial.css"
const Testimonial = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
            <section className="bg-grey py-5">
                <div className="container px-lg-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex  align-items-center justify-content-between mb-5'>
                                <h2 className="title">Testimonials</h2>
                                <div className="customNavigation d-flex me-lg-5">
                                    <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handlePreviousSlide}><IoIosArrowBack /></butt>
                                    <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handleNextSlide}><IoIosArrowForward /></butt>
                                </div>
                            </div>
                            <Slider {...settings} ref={sliderRef}>
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/1.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">Linda Campbell</h4>
                                    <span className="job-testimonials-3-columns">CEO Finanace Theme Group</span>
                                </div>{/* end item */}
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/2.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">John Walker</h4>
                                    <span className="job-testimonials-3-columns">Photographer</span>
                                </div>{/* end item */}
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/3.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">Cheryl Cruz</h4>
                                    <span className="job-testimonials-3-columns">Marketing Manager</span>
                                </div>{/* end item */}
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/4.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">James Smith</h4>
                                    <span className="job-testimonials-3-columns">Senior Finance Manager</span>
                                </div>{/* end item */}
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/5.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">Maria Garcia</h4>
                                    <span className="job-testimonials-3-columns">Finance Director Theme Group</span>
                                </div>{/* end item */}
                                <div className="item item-testimonials-3-columns text-left">
                                    <p className="quote-icon">“</p>
                                    <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
                                    <div className="avatar-testimonials-3-columns">
                                        <img src="images/Testimonials/6.jpg" className="img-responsive" alt="img" />
                                    </div>
                                    <h4 className="name-testimonials-3-columns">Robert Johnson</h4>
                                    <span className="job-testimonials-3-columns">Finance Assistant - PR Agency</span>
                                </div>
                            </Slider>
                        </div>
                    </div>{/* End row */}
                </div>{/* End container */}
            </section>

        </>
    )
}

export default Testimonial