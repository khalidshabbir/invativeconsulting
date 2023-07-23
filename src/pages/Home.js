import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Process from '../components/OurProcess/Prcoess'
import Partners from '../components/Partners/Partners'
import Team from '../components/Team/Team'
import CallBack from '../components/CallBack/CallBack'
import Testimonial from '../components/Testimonial/Testimonial'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseus'
import OurCommitment from '../components/OurCommitment/OurCommitment'
const Home = () => {
  const [counterOn,setcounterOn]=useState(false)
  return (
    <>
    
      <Hero />
      {/* =================================== */}
      <div className="py-5 my-5">
        <div className="container px-lg-5">
          <div className="row clearfix d-flex align-items-center">
            <article className="col-md-6 col-lg-3 thumbnail-style thumbnail-icon-item text-center">
              <div className="thumbnail">
                <img src="images/Services/1.png" alt="img" />
                <div className="caption">
                  <h4>Accounting & Bookkeeping</h4>
                  <p>
                  Streamline financial processes with expert accounting and bookkeeping services for accurate and organized business records.
                  </p>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-md-6 col-lg-3 thumbnail-style thumbnail-icon-item text-center">
              <div className="thumbnail">
                <img className="img-icon-thumbnail" src="images/Services/2.png" alt="img" />
                <div className="caption">
                  <h4>Financial Analysis & Modelling </h4>
                  <p>
                  Comprehensive financial analysis and modeling services to drive informed decision-making and maximize profitability
                  </p>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-md-6 col-lg-3 thumbnail-style thumbnail-icon-item text-center">
              <div className="thumbnail">
                <img className="img-icon-thumbnail" src="images/Services/3.png" alt="img" />
                <div className="caption">
                  <h4>Inventory Management Services</h4>
                  <p>
                  Streamline your operations with our Inventory Management Services. Optimize stock levels and improve efficiency effortlessly
                  </p>
                </div>
              </div>
            </article>{/* End article */}
            <article className="col-md-6 col-lg-3 thumbnail-style thumbnail-icon-item text-center">
              <div className="thumbnail">
                <img className="img-icon-thumbnail" src="images/Services/6.png" alt="img" />
                <div className="caption">
                  <h4>Project Monitoring & coordination </h4>
                  <p>
                  Efficiently oversee and manage projects, ensuring seamless coordination for timely and successful outcomes
                  </p>
                </div>
              </div>
            </article>{/* End article */}
          </div>{/* End Row */}
        </div>
      </div> {/* End section */}
     {/* =================================================================== */}
    <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
      <section className="bg-grey py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="counter-up counter-up-style-1 text-center">
                <h2>We are help you to grow your business</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id lectus quis dui euismod consectetur. Pellentesque ac ante sollicitudin, tincidunt nulla in, bibendum massa. Phasellus bibendum, sem velue aliquam gravida, eros ex dapibus neque, eget fermentum dolor arcu a tortor. Integer placerat massa nec elit egestas efficitur. </p>
                <ul>
                  <li>
                  <div className='d-flex flex-column align-items-start'>
                    <p className='p-0 m-0'><span className='p-0 m-0' style={{fontSize:"70px",fontWeight:300}}> {counterOn&&<CountUp start={0} end={10} duration={1} delay={0} />}</span><span className='m-0 p-0 ' style={{fontSize:"30px"}}></span></p>
                    <span className="label-counter mt-0 pt-0">Years of experience</span>
                    </div>
                    
                  </li>
                  <li>
                  <div className='d-flex flex-column align-items-start'>
                    <p className='p-0 m-0'><span className='p-0 m-0' style={{fontSize:"70px",fontWeight:300}}>{counterOn&&<CountUp start={0} end={95} duration={1} delay={0} />}</span><span className='m-0 p-0 ' style={{fontSize:"30px"}}>K</span></p>
                    <span className="label-counter mt-0 pt-0">Happy Customers</span>
                    </div>
                  </li>
                  <li>
                  <div className='d-flex flex-column align-items-start'>
                    <p className='p-0 m-0'><span className='p-0 m-0' style={{fontSize:"70px",fontWeight:300}}>{counterOn&&<CountUp start={0} end={100} duration={1} delay={0} />}</span><span className='m-0 p-0 ' style={{fontSize:"30px"}}>%</span></p>
                    <span className="label-counter mt-0 pt-0">Satisfaction</span>
                    </div>
                  </li>
                </ul>
              </div>{/* End counter up */}
            </div> {/* End cold */}
          </div>{/* End row */}
        </div>{/* End container */}
      </section>
      </ScrollTrigger>

      {/* ========================================= */}

        <Process/>

        {/* ============================== */}
        <Testimonial/>

        {/* ============================== */}
       <OurCommitment/>
      {/* ========================================= */}
      <section className="bg-grey py-5">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-md-12">
              <div className='d-flex align-items-center justify-content-center mb-5'>
              <h2 className="title text-center">We Makes It Easy</h2>
              </div>
             
              <div className="clearfix" />
              <div className="row mt-3">
                
                  <div className="col-12 col-lg-4">
                    <div className="make-easy-item">
                      <h4>Whatever</h4>
                      <p>Maecenas et varius mauris, in viverra urna. Praesent eu lacinia lacus. Nam ac velit vitae justo congue dignissim dignissim vitae nulla. Donec quis leo lorem. Morbi bibendum vehicula nibh id sodales. Vivamus in vestibulum magna, ut lobortis neque. </p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-12 col-lg-4">
                    <div className="make-easy-item">
                      <h4>Wherever</h4>
                      <p>In placerat sapien urna, quis faucibus metus lacinia commodo. Integer feugiat ullamcorper risus, sed efficitur velit dignissim at. Donec tincidunt elit a neque venenatis varius. Phasellus eget tempor est. Vivamus ut cursus ligula. </p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-12 col-lg-4">
                    <div className="make-easy-item">
                      <h4>Whenever</h4>
                      <p>Cras non odio tempus, euismod eros eget, venenatis ligula. Nullam augue sem, tincidunt sed elit ac, mollis eleifend justo. Aliquam non magna ac risus lacinia lacinia quis eu justo. Praesent a tempus ante. Etiam ac turpis finibus, aliquam augue quis, feugiat est.</p>
                    </div>
                  {/* end col */}
                </div> {/* End 3 column text */}
              </div>{/* End row */}
            </div>{/* End col12 */}
          </div>{/* End row */}
        </div>{/* End Container */}
      </section>

      {/* =========================================== */}
      <CallBack/>
      {/* =============================================================== */}
        <Team/>
        {/* =============================== */}
      <WhyChooseUs/>
      {/* ================================ */}
       <Partners/>
      {/* ========================================================== */}
     
    </>
  )
}

export default Home