import React from 'react'
import "./CallBack.css"
const CallBack = () => {
  return (
    <>
          <section className="bg-dark py-5">
              <div className="container">
                  <div className="row">
                  <div className="col-md-6 get-call-back-left">
                              <div className="call-back-text">
                                  <h2 className="text-white">Get a Call Back</h2>
                                  <div className="clearfix" />
                                  <p className="text-grey">If you need to speak to us about a general query fill in<br /> the form below and we will call you back within the<br /> same working day.</p>
                              </div>{/* End call back text left */}
                          </div>
                          <div className="col-md-6 get-call-back-right">
                              <div className="call-back-form">
                                  <form >
                                      <p>How can we help? *</p>
                                    
                                      <div className="row">
                                          <div className="form-group col-md-6 custom-form">
                                              <input type="email" className="form-control shadow-none" id="name" placeholder="yourmail@example.com *" />
                                          </div>
                                          <div className="form-group col-md-6 custom-form">
                                              <input type="text" className="form-control shadow-none" id="phone" placeholder="Phone Number: *" />
                                          </div>
                                      </div>
                                      <textarea  type="text" className="form-control custom-textarea shadow-none" id="message" placeholder="Message" rows="3"/>
                                      <button  className="ot-btn large-btn btn-rounded btn-main-color btn-submit">Submit</button>
                                  </form>
                              </div>{/* End call back form */}
                          </div>
                  </div>{/* End row */}
              </div>{/* End container */}
          </section>

    
    
    </>
  )
}

export default CallBack