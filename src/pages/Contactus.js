import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import { FaHome } from "react-icons/fa"
import { IoIosCall } from "react-icons/io"
import { FiMail } from "react-icons/fi"
import { BiTime } from "react-icons/bi"
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
                  IBCI is a renowned international consulting firm committed to empowering clients with tailored financial management solutions. 
                </p>
                <ul className="address">
                  <li className='cursor-pointer'><p><FaHome />&nbsp;&nbsp; 38-Commercial, Imperial Gardens, Paragon, Barki Road, Lahore</p></li>
                  <li className='cursor-pointer'><p><IoIosCall />&nbsp;&nbsp;+923350402576
                  </p></li>
                  <li className='cursor-pointer'><p><IoIosCall /> &nbsp;+923350402576</p></li>
                  <a className='text-dark' href='https://mail.google.com/mail/?view=cm&to=team.ibci2023@gmail.com' target="_blank" rel="noreferrer"> <li className='cursor-pointer'><p><FiMail />&nbsp;&nbsp; team.ibci2023@gmail.com</p></li></a>
                  <li className='cursor-pointer'><p><BiTime />&nbsp;&nbsp;   Mon-Fri 09:00 - 17:00</p></li>
                </ul>
              </div>

              <div className='folows'>
                <h4 className='mt-5 mb-4'>Follow Us</h4>
                <SocialIcons iconsize="24px" />
              </div>

            </div> {/* End col */}
          </div>
          <div className='w-100 mt-5'>
            <h4>Our Office</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11356.857050382052!2d74.45139533210852!3d31.527437379751174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s38-Commercial%2C%20Imperial%20Gardens%2C%20Paragon%2C%20Barki%C2%A0Road%2C%C2%A0Lahore!5e0!3m2!1sen!2s!4v1691446020154!5m2!1sen!2s" title="office address" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contactus