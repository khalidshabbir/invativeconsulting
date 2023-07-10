import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import servicesimg from "../assets/services.jpg"
import Process from "../components/OurProcess/Prcoess"
import Testimonial from "../components/Testimonial/Testimonial"
import Callback from "../components/CallBack/CallBack"
import Partners from "../components/Partners/Partners"
const Services = () => {
  return (
    <>
      <Hero title="Services" img={servicesimg} />
      {/* --------------------------------------- */}
      <div className="padding-top-70 padding-bottom-70">
        <div className="container px-lg-5">
          <h4 className='my-3'>Our Services</h4>
          <div className="row  ">
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left ">
              <div className="thumbnail icon-left">
                <img src="images/Services/1.png" alt />
                <div className="caption">
                  <h4>Finacial Planning</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left ">
              <div className="thumbnail icon-left">
                <img className="img-icon-thumbnail" src="images/Services/2.png" alt />
                <div className="caption">
                  <h4>Investments Management</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left ">
              <div className="thumbnail icon-left">
                <img className="img-icon-thumbnail" src="images/Services/3.png" alt />
                <div className="caption">
                  <h4>Taxes Planning</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left no-margin">
              <div className="thumbnail icon-left">
                <img className="img-icon-thumbnail" src="images/Services/4.png" alt />
                <div className="caption">
                  <h4>Business Loan</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left no-margin">
              <div className="thumbnail icon-left">
                <img className="img-icon-thumbnail" src="images/Services/5.png" alt />
                <div className="caption">
                  <h4>Insurance Consulting</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-sm-6 col-md-4 thumbnail-style mt-5 thumbnail-icon-item text-left no-margin">
              <div className="thumbnail icon-left">
                <img className="img-icon-thumbnail" src="images/Services/6.png" alt />
                <div className="caption">
                  <h4>Retirement Managerment</h4>
                  <p>
                    Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
                  </p>
                  <a className="learn-more" href="services-detail.html"><i className="fa fa-caret-right" aria-hidden="true" />  See More
                  </a>
                </div>
              </div>
            </article>{/* End article */}

          </div>{/* End Row */}
        </div>{/* End container */}
      </div>

      <Process/>
      <Testimonial/>
      <Callback/>
      <Partners/>


    </>
  )
}

export default Services