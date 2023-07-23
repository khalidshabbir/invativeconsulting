import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceDetails = () => {
    return (
        <>
            <div>
                <section className="bg-grey padding-top-45 padding-bottom-45 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <div className="col-md-12">
                                    <h2>Our services</h2>
                                </div>
                            </div>
                        </div>{/* End Row */}
                    </div>{/* End container */}
                </section>{/*  End Section */}
                {/* Section BreadCrumb */}
                <div className="no-padding border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ol className="breadcrumb breadcrumb-finance mt-3">
                                    <li className='text-dark me-2'>Services</li>
                                    <li className='text-dark me-2'>/</li>
                                    <li className='text-dark me-2'>Accounting & Bookkeeping</li>
                                </ol>
                            </div>{/*  End col */}
                        </div> {/* End Row */}
                    </div>{/* End container */}
                </div>{/*  End Section */}
                <div className="line" />
                {/*Services Detail */}
                <section className="padding-top-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 services-detail-content">
                                <img src="images/Services/detail.jpg" className="img-responsive img-header-detail" alt="Image" />
                                <div className="h-block">
                                    <h3>Financial Statements</h3>
                                    <div className="">

                                        <p>Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem. Donec sit amet elit a felis tristique eleifend. Aliquam erat volutpat. Cras metus ipsum, tincidunt in bibendum vitae, fringilla ac ipsum. Sed at eros quis mi pulvinar lacinia eget sed ex. Vestibulum eget ipsum porttitor, cursus urna nec, ultrices enim. Sed eget dignissim nulla, non facilisis augue. Fusce nec dictum nunc. Maecenas hendrerit tempus magna eu ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eros ligula, porta non leo porttitor, laoreet mollis nisl.
                                        </p>
                                    </div>{/* End row */}
                                </div>{/* End H-block */}
                              
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 slidebar">
                                <div className="list-group">
                                 
                                    <NavLink to="/services" className="list-group-item active">Accounting & Bookkeeping </NavLink>
                                    <NavLink to="/services" className="list-group-item ">Financial Analysis & Modelling</NavLink>
                                    <NavLink to="/services" className="list-group-item ">Inventory Management Services</NavLink>
                                    <NavLink to="/services" className="list-group-item ">Project Monitoring & coordination </NavLink>
                                    <NavLink to="/services" className="list-group-item ">Feasibilities / Business Solutions  </NavLink>
                                    <NavLink to="/services" className="list-group-item ">GIS based solutions  </NavLink>
                                    <NavLink to="/services" className="list-group-item ">Writing Expression of Interest/Request For Proposal </NavLink>
                                    <NavLink to="/services" className="list-group-item ">Tender Management </NavLink>
                                    <NavLink to="/services" className="list-group-item ">Taxation </NavLink>
                                </div>
                            </div>  {/* End col slidebar */}

                        </div>{/* End Row */}
                    </div>{/* End container */}
                </section>{/*  End Section */}
                {/* Get a quote section */}

            </div>

        </>
    )
}

export default ServiceDetails