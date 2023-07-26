import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import partners from "../assets/partners.jpg"
import partener1 from "../assets/partners/p1.jpg"
const InternationalPartners = () => {
  return (
    <>
      <Hero title="Our Partners" img={partners} />
      <div className='my-5 container'>
        <h1 class="mb-4 text-center">Our Partners</h1>

        <p className='text-center'>At IBCI, we are proud to collaborate with a diverse range of partners who play a crucial
          role in delivering exceptional services and value to our clients. Our partners consist of trusted
          organizations and individuals known for their expertise and commitment to excellence.</p>

       <div className='row d-flex align-items-center'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3'>
        <h3>Harmony Home & Community Care</h3>
       <p className='text-align-justify mt-4'>We are honored to partner with Harmony Home & Community Care, an organization deeply committed to providing compassionate support to individuals seeking assistance in their daily lives. Their wide range of personalized in-home care services, including personal care, transport, and home maintenance, align perfectly with our mission to cater to our clients' diverse needs. Harmony takes the time to genuinely understand their clients' goals and aspirations, ensuring they receive the right support within their funded packages. Together, we aim to enrich the lives of our clients, fostering a sense of harmony, comfort, and empowerment in every aspect of their care journey.</p>
        <a href='https://www.hhacc.com.au/' target='_blank'><button className='btn btn-primary text-light'>Visit Website</button></a>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3 text-center'>
        <img src={partener1 }  style={{width:"550px"}} alt='img'/>
        </div>
       </div>
     

      </div>


    </>
  )
}

export default InternationalPartners