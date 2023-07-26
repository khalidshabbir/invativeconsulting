import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import servicesimg from "../assets/services.jpg"
import Process from "../components/OurProcess/Prcoess"
import Testimonial from "../components/Testimonial/Testimonial"
import Callback from "../components/CallBack/CallBack"
import Partners from "../components/Partners/Partners"
import service1 from '../assets/services/1.jpg'
import service2 from '../assets/services/2.jpg'
import service3 from '../assets/services/3.jpg'
import service4 from '../assets/services/4.jpg'
import service5 from '../assets/services/5.jpg'
import service6 from '../assets/services/6.jpg'
import service7 from '../assets/services/7.jpg'
import service8 from '../assets/services/8.jpg'
import service9 from '../assets/services/9.jpg'
import { NavLink } from 'react-router-dom'
const Services = () => {
  return (
    <>
      <Hero title="Services" img={servicesimg} />
      {/* --------------------------------------- */}
      <div className="padding-top-70 padding-bottom-70">
        <div className="container px-lg-5">
          <h4 className='my-3'>Our Services</h4>
          {/* =================================================== */}
          <section className="padding-top-50 padding-bottom-20">
            <div className="container">
              <div className="row">
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/accounting&bookeeping/1">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service1} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Accounting & Bookkeeping </h4>
                        </div>
                        <div className="caption">
                          <p>
                          Streamline financial processes with expert accounting and bookkeeping services for accurate and organized business records.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/FinancialAnalysis&Modelling/2">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service2} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Financial Analysis & Modelling </h4>
                        </div>
                        <div className="caption">
                          <p>
                          Comprehensive financial analysis and modeling services to drive informed decision-making and maximize profitability.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/InventoryManagementServices/3">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service3} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Inventory Management Services</h4>
                        </div>
                        <div className="caption">
                          <p>
                          Streamline your operations with our Inventory Management Services. Optimize stock levels and improve efficiency effortlessly.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>

                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/ProjectMonitoring&coordination/4">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service4} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Project Monitoring & coordination</h4>
                        </div>
                        <div className="caption">
                          <p>
                          Efficiently oversee and manage projects, ensuring seamless coordination for timely and successful outcomes.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/FeasibilitiesBusinessSolutions/5">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service5} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Feasibilities / Business Solutions </h4>
                        </div>
                        <div className="caption">
                          <p>
                          Comprehensive feasibility studies and innovative business solutions to help your company make informed decisions and achieve success.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/GISbasedsolutions/6">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service6} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>GIS based solutions </h4>
                        </div>
                        <div className="caption">
                          <p>
                           Harness geospatial data for informed decision-making. Unlock powerful insights and optimize processes with our cutting-edge technology.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/WritingExpressionofInterest/7">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service7} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Writing Expression of Interest</h4>
                        </div>
                        <div className="caption">
                          <p>
                          Craft compelling Expression of Interest and Request for Proposal documents to win new business opportunities.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/TenderManagement/8">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service8} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Tender Management</h4>
                        </div>
                        <div className="caption">
                          <p>
                          Tender Management: Streamline and optimize the end-to-end process of tendering, from preparation to submission, ensuring efficiency and compliance.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3'>
                  <NavLink to="/service_details/Taxation/9">
                    <div className="item-services">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={service9} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>Taxation</h4>
                        </div>
                        <div className="caption">
                          <p>
                          Expert taxation services to optimize financial compliance, minimize liabilities, and maximize returns for your business.
                          </p>
                          <button className='btn-outline btn-secondary-outline'>See more</button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                {/* end column 1 */}

              </div>{/* End Row */}
            </div>{/* End container */}
          </section>

          {/* ========================================================== */}
        </div>{/* End container */}
      </div>

      <Process />
      <Testimonial />
      <Callback />
      <Partners />


    </>
  )
}

export default Services