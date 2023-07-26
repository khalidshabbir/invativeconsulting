import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import data from '../pages/Data/servicesdetails'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
const Services_Details = () => {
    const { id } = useParams()
    const [getFilterData, setFilterData] = useState([]);
    useEffect(() => {
       
        const filtereddatafunciton = () => {
            const filterdata = data.find((element) => element.id == id);
            setFilterData(filterdata)
        }
        filtereddatafunciton()
    }, [id])

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
                                <div>
                                    <img src={getFilterData.image} className="img-responsive img-header-detail" style={{ width: "100%", height: "450px", backgroundSize: "center" }} alt="imgservice" />
                                    <div className="h-block">
                                        <h2>{getFilterData.servicename}</h2>
                                        <div className=" myb-5 py-5 text-align-justify">
                                            <p>{getFilterData.description}</p>
                                        </div>{/* End row */}
                                    </div>{/* End H-block */}
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 slidebar">
                                <div className="list-group">

                                    <NavLink to="/service_details/Accounting&Bookkeeping/1" className="list-group-item ">Accounting & Bookkeeping </NavLink>
                                    <NavLink to="/service_details/FinancialAnalysis&Modelling/2" className="list-group-item "  >Financial Analysis & Modelling</NavLink>
                                    <NavLink to="/service_details/InventoryManagementServices/3" className="list-group-item " >Inventory Management Services</NavLink>
                                    <NavLink to="/service_details/ProjectMonitoring&coordination/4" className="list-group-item " >Project Monitoring & coordination </NavLink>
                                    <NavLink to="/service_details/FeasibilitiesBusinessSolutions/5" className="list-group-item " >Feasibilities / Business Solutions  </NavLink>
                                    <NavLink to="/service_details/GISbasedsolutions/6" className="list-group-item " >GIS based solutions  </NavLink>
                                    <NavLink to="/service_details/WritingExpressionofInterest/7" className="list-group-item " >Writing Expression of Interest/Request For Proposal </NavLink>
                                    <NavLink to="/service_details/TenderManagement/8" className="list-group-item " >Tender Management </NavLink>
                                    <NavLink to="/service_details/Taxation/9" className="list-group-item " >Taxation </NavLink>
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

export default Services_Details