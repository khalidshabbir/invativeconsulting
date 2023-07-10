import React from 'react'
import Socials from '../socialsIcons/SocialIcons'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className=" bg-dark footer">
        <div className="container px-lg-5">
          <div className="row">
            <div className="footer-row">
              <div className="footer-col-1">
                <a href="index.html"><img src="images/Footer/logo-footer.png" className="img-responsive" alt="Image" /></a>
                <ul className="clearfix">
                  <li><a href="services-detail.html">Finacial Planning</a></li>
                  <li><a href="services-detail.html">Insurance Consulting</a></li>
                  <li><a href="services-detail.html">Investments Management</a></li>
                  <li><a href="services-detail.html">Retirement Strategies</a></li>
                  <li><a href="services-detail.html">Taxes Planning</a></li>
                  <li><a href="services-detail.html">Business Loan</a></li>
                </ul>
              </div>
              <div className="footer-col-2">
                <h3 className="text-white">Contact us</h3>
                <div className="border-2-side">
                  <p>Address: 8th floor, 379 Hudson St, New York, NY 10018</p>
                  <p><span>Phone: (+1) 96 716 6879</span></p>
                  <p><span>Email: contact@site.com</span></p>
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
              <p>Copyright © 2023. ABC Company  All rights reserved.</p>
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