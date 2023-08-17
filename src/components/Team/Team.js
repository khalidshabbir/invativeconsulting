import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import { BiLogoLinkedin } from "react-icons/bi"
import "./Team.css"
import { base_url } from "../../utils/base_url"
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react';
import { base_url_images } from '../../utils/base_url';
import CircularProgress from '@mui/material/CircularProgress';
const Team = (props) => {
    const [loading,setloading]=useState(true)
    const { bg } = props
    const bgp = bg || "bg-grey";
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
    const [getdata, setdata] = useState()
    const handlegetdata = async () => {
        setloading(false)
        const endpoint = `${base_url}/getteams`
        try {
            const response = await axios.get(endpoint)
            const check_length = response.data.team;
           
            if (check_length.length >= 4) {
                setdata(response.data.team)
            }

            setloading(true)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        handlegetdata()
    }, [])

    return (
        <>
            <section className={`${bgp} py-5`}>
                <div className="container px-lg-5">
                    {loading?
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex align-items-center justify-content-between mb-5'>
                                <h2 className="title">Our Experts</h2>
                                <div className="customNavigation d-flex me-lg-4">
                                    <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handlePreviousSlide}><IoIosArrowBack /></butt>
                                    <butt className="btn px-0 d-flex align-items-center justify-content-center" onClick={handleNextSlide}><IoIosArrowForward /></butt>
                                </div>
                            </div>
                            <div id="owl-experts" className="owl-carousel owl-theme owl-experts clearfix">
                                <Slider {...settings} ref={sliderRef}>
                                    {getdata?.map((obj) => {
                                        return (
                                            <>
                                                <div className="item item-experts text-center">
                                                    <div className="expert-img-container">
                                                        <div className="avatar d-flex algin-items-center ">
                                                            <img src={`${base_url_images}images/${obj.image}`} className="img-responsive" alt="profile" />
                                                        </div>
                                                        <a href={obj.linkedin} target='_blank' rel="noreferrer" className="in-experts">
                                                            <BiLogoLinkedin />
                                                        </a>
                                                    </div> {/* end expert img container */}
                                                    <div className="clearfix" />
                                                    <h4 className>{obj.name}</h4>
                                                    <p className="job-experts">{obj.designation}</p>
                                                </div>
                                            </>
                                        )
                                    })

                                    }

                                </Slider>
                            </div>


                        </div> {/* End col */}
                    </div>:<div className='d-flex align-items-center justify-content-center'>
                    <CircularProgress  style={{color:"#01ABC8"}}/>
                        </div>}
                </div>
            </section>

        </>
    )
}

export default Team