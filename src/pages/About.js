import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import aboutus from '../assets/aboutus.jpg'
import missionimg from "../assets/mission.png"
import vissionimg from "../assets/vision.png"
import valuesimg from "../assets/values.png"
import Partner from "../components/Partners/Partners"
import CallBack from '../components/CallBack/CallBack'
const About = () => {
  return (
    <>
      <Hero title="About Us" img={aboutus} />
      {/* ====================================== */}
      <section className="bg-grey py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center px-lg-5">
                <h2 className=''>ABOUT US </h2>
                <p className='mt-5 text-align-justify' >Welcome to HBC, a renowned international consulting firm providing a diverse range of consultancy services and innovative business solutions. With a global presence and a track record of excellence, we are committed to empowering our clients for success.
                  In the realm of financial management, our expertise extends to accounting and bookkeeping services, where we efficiently handle accounts, bookkeeping, payroll, and tax management to ensure your financial operations are streamlined and compliant. Additionally, we offer financial analysis and modeling services, equipping you with crucial insights and accurate forecasting to make informed decisions. Whether you need budgets prepared or financial analyses conducted, we have you covered.
                  HBC also specializes in business solutions, offering services such as grant writing, business proposal writing, market research, and feasibility studies for small businesses. Our experienced team can craft comprehensive business plans and marketing strategies to drive growth and profitability. Moreover, we excel in GIS-based solutions, including data management, spatial planning, and analytical reports, enabling you to leverage geospatial information for strategic decision-making.
                  From project monitoring and coordination to tender management and taxation services, HBC is your one-stop destination for comprehensive and tailored consultancy solutions that transcend borders and lead to lasting success in the global market. Let us be your trusted partner in achieving your business objectives and seizing new opportunities.
                </p>

              </div>{/* End counter up */}
            </div> {/* End cold */}
          </div>{/* End row */}
        </div>{/* End container */}
      </section>


      {/* ======================================== */}
      <section className='missionvision  my-5'>
        <div className='container px-lg-5'>
          <div className='row'>
            <div className='col-12 col-md-4 px-3'>
              <div className='d-flex flex-column align-items-center justify-content-center '>
                <img src={missionimg} style={{ width: "200px", height: "200px" }} alt='' />
                <h4>Our Mission</h4>
                <div className='text-align-justify' style={{}}>
                  <p>At “Horizon Business Consultant” (HBC), our mission is to provide exceptional products and services, including a diverse range of consultancy offerings. From accounting and inventory management to business proposals development and financial analysis, we offer strategic guidance and innovative solutions to empower clients in today's dynamic business landscape. With a focus on customer satisfaction, our dedicated team collaborates closely with clients to drive growth, efficiency, and long-term success</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 px-3'>
              <div className='d-flex flex-column align-items-center justify-content-center '>
                <img src={vissionimg} style={{ width: "200px", height: "200px" }} alt='' />
                <h4>Our Vissoion</h4>
                <div className='text-align-justify' style={{}}>
                  <p>Enabling organizations to thrive in the dynamic digital landscape through top-tier consultancy, advanced technology, strategic expertise, and exceptional customer value</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 px-3'>
              <div className='d-flex flex-column align-items-center justify-content-center '>
                <img src={valuesimg} style={{ width: "200px", height: "200px" }} alt='' />
                <h4>Our Values</h4>
                <div className='text-center' style={{}}>
                  <p className='justify-content-center'>At HBC, we embody excellence, delivering meticulous solutions that exceed Clients' expectations, and thrive on collaborative partnerships, uniting diverse perspectives for mutual success.</p>

                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* ======================================================== */}
      <section className='bg-grey py-5'>
        <div className='container px-lg-5'>
          <div className='row'>
            <div className='col-12'>
              <div>
                <h4 className='text-center'>How We Work With You</h4>
                <p className='text-align-justify mt-3'>We establish a close partnership by adapting our diverse expertise to suit your specific needs. Through collaborative efforts, we gain a deep understanding of your objectives, crafting innovative solutions that catalyze success and growth. Our commitment to transparent communication remains steadfast throughout our collaborative journey.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      {/* ================================== */}
      <CallBack/>
      {/* ===================================== */}
      <Partner />
    </>
  )
}

export default About