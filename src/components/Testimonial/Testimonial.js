import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { base_url_images } from '../../utils/base_url';
import Slider from "react-slick";
import CircularProgress from '@mui/material/CircularProgress';
import "./Testimonial.css"
const Testimonial = () => {
    const [loading, setloading] = useState(false)
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
    const [getdata, setdata] = useState()
    const handlegetdata = async () => {
        setloading(false)
        const endpoint = `${base_url}/gettestimonial`
        try {
            const response = await axios.get(endpoint)
            const check_length = response.data.testimonial;

            if (check_length.length > 3) {

                setdata(response.data.testimonial)
            }

            setloading(true)
        } catch (error) {

        }
    }
    useEffect(() => {
        handlegetdata()
    }, [])
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
                            {loading ?
                                <Slider {...settings} ref={sliderRef}>
                                    {getdata?.map((obj) => {
                                        return (
                                            <>

                                                <div className="item item-testimonials-3-columns text-left">
                                                    <p className="quote-icon">“</p>
                                                    <p><i>{obj.testimonialtext}</i></p>
                                                    <div className="avatar-testimonials-3-columns">
                                                        <img src={`${base_url_images}images/${obj.image}`} className="img-responsive" alt="img" />
                                                    </div>
                                                    <h4 className="name-testimonials-3-columns">{obj.name}</h4>
                                                    <span className="job-testimonials-3-columns">{obj.designation}</span>
                                                </div>{/* end item */}
                                            </>)
                                    })}
                                </Slider> : <div className='d-flex align-items-center justify-content-center'>
                                    <CircularProgress style={{ color: "#01ABC8" }} />
                                </div>}
                        </div>
                    </div>{/* End row */}
                </div>{/* End container */}
            </section>

        </>
    )
}

export default Testimonial