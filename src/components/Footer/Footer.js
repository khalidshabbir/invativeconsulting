import React from 'react'
import Socials from '../socialsIcons/SocialIcons'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import { base_url } from '../../utils/base_url'
import axios from 'axios'
import {useState,useEffect} from 'react'
const Footer = () => {
  const [getdata, setdata] = useState([]);
  const getdataFunciton = async () => {
      const endpoint = `${base_url}/getcontactus`
      try {
          const response = await axios.get(endpoint);
          const data = response.data.contactus;

          setdata(data)

      } catch (error) {

      }
  }
  useEffect(() => {
      getdataFunciton()
  }, [])
  return (
    <>
      <footer className=" bg-dark footer">
        <div className="container px-lg-5">
          <div className="row">
            <div className="footer-row">
              <div className="footer-col-1">
                <a href="index.html"><Logo/></a>
                <ul className="clearfix">
                  <li><a href="/service_details/Accounting&Bookkeeping/1">Accounting & Bookkeeping</a></li>
                  <li><a href="/service_details/FinancialAnalysis&Modelling/2">Financial Analysis & Modelling </a></li>
                  <li><a href="/service_details/InventoryManagementServices/3" >Inventory Management Services </a></li>
                  <li><a href="/service_details/ProjectMonitoring&coordination/4">Project Monitoring & coordination </a></li>
                  <li><a href="/service_details/FeasibilitiesBusinessSolutions/5">Feasibilities / Business Solutions </a></li>
                  <li><a href="/service_details/GISbasedsolutions/6">GIS based solutions</a></li>
                  <li><a href="/service_details/WritingExpressionofInterest/7">Writing Expression of Interest</a></li>
                  <li><a href="/service_details/WritingExpressionofInterest/7">Writing Expression of Interest</a></li>
                  <li><a href="/service_details/TenderManagement/8">Tender Management</a></li>
                  <li><a href="/service_details/Taxation/9">Taxation</a></li>
                </ul>
              </div>
              <div className="footer-col-2">
                <h3 className="text-white">Contact us</h3>
                <div className="border-2-side">
                  <p>{getdata?.location}</p>
                  <p><span>Phone: +{getdata?.phone}</span></p>
                  <a href={`https://mail.google.com/mail/?view=cm&to=${getdata?.email}`} target="_blank" rel="noreferrer"><span>Email: {getdata?.email}</span></a>
                </div>
              </div>
              <div className="footer-col-3">
                <h3 className="text-white">Follow us</h3>
                 <div className='socials_icons_footer py-5'>
                  <Socials iconsize="20px"/>
                 </div>
              </div>
            </div> {/* End footer row */}
            <div className="col-md-12 footer-link">
              <p className='cursor-pointer'>Copyright © 2023. HBC Company  All rights reserved.</p>
              <ul>
              <NavLink className="text-white me-3" to="/aboutus"> <li>About </li></NavLink>
              <NavLink className="text-white me-3" to="/contactus"> <li>Contact Us </li></NavLink>
              <NavLink className="text-white me-3" to="/terms_conditions"> <li>Term &amp; Conditions </li></NavLink>
              <NavLink className="text-white " to="/privacy_policies"> <li>Privacy Policy </li></NavLink>
                
                
              </ul>
            </div>
          </div>{/* End Row */}
        </div>{/* End container */}
      </footer>

    </>
  )
}

export default Footer