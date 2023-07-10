import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import {FaHome} from "react-icons/fa"
import {IoIosCall} from "react-icons/io"
import {FiMail} from "react-icons/fi"
import {BiTime} from "react-icons/bi"
import SocialIcons from '../components/socialsIcons/SocialIcons'
import imgs from "../assets/contactus.jpg"

const Contactus = () => {
  
  return (
   <>
    <Hero title="Contact Us" img={imgs} />
     

     {/* ======================================Contact us========================== */}
      <section className="padding-top:50px;">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 left-contact">
              <h4> Send Us a Message</h4>
              <form className="form-inline form-contact-finance" name="contact" method="post" action="send_form_email.php">
                <div className="row">
                  <div className="form-group col-sm-12  col-md-4">
                    <input type="text" className="form-control" name="yourName" id="yourName" placeholder="Your Name" />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <input type="email" className="form-control" name="yourEmail" id="yourEmail" placeholder="Your Email" />
                  </div>
                  <div className="form-group col-sm-12 col-md-4">
                    <input type="text" className="form-control" name="yourPhone" id="phoneNumber" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="input-content">
                  <div className="form-group form-textarea">
                    <textarea id="textarea" className="form-control" name="comments" rows={6} placeholder="Your Messages" defaultValue={""} />
                  </div>
                </div>
                <button className="ot-btn large-btn btn-rounded  btn-main-color btn-submit">Send Mail</button>
              </form> {/* End Form */}
            </div> {/* End col */}
            <div className="col-12 col-lg-4 right-contact mt-5 mt-lg-0">
              <div className='contactinfo'>
              <h4>Contact Info</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus arcu, malesuada a est eget, maximus efficitur sapien.
              </p>
              <ul className="address">
                <li className='cursor-pointer'><p><FaHome />&nbsp;&nbsp; 8th floor, 379 Hudson St, New York, NY 10018</p></li>
                <li className='cursor-pointer'><p><IoIosCall />&nbsp;&nbsp; (+1) 96 716 6879</p></li>
                <li className='cursor-pointer'><p><IoIosCall /> &nbsp;(+1) 96 716 6879</p></li>
                <li className='cursor-pointer'><p><FiMail />&nbsp;&nbsp; contact@finance.com</p></li>
                <li className='cursor-pointer'><p><BiTime />&nbsp;&nbsp; Mon-Fri 09:00 - 17:00</p></li>
              </ul>
              </div>

              <div className='folows'>
                <h4 className='mt-5 mb-4'>Follow Us</h4>
                <SocialIcons iconsize="24px"/>
              </div>
             
            </div> {/* End col */}
          </div>
          <div className='w-100 mt-5'>
          <h4>Our Office</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.293695067065!2d74.34081047549502!3d31.516092574215932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458fb499665%3A0x7b5e489578936329!2sHafeez%20Center%2C%20LG%205%2C%20Block%20E1%20Block%20E%201%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688897400504!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

   </>
  )
}

export default Contactus