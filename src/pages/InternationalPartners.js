import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import partners from "../assets/partners.jpg"
// import partener1 from "../assets/partners/p1.jpg"
import {HiMail} from 'react-icons/hi'
const InternationalPartners = () => {
  return (
    <>
      <Hero title="Our Partners" img={partners} />
      <div className='my-5 container'>
        <h1 class="mb-4 text-center">Welcome to CANOPUS CONSULTANTS</h1>

        <div className='text-align-justify'>
          <h4 className='text-center my-5'>IBCI's esteemed international partner in Australia</h4>
          <p className=''>Introducing CANOPUS CONSULTANTS - Your Trusted Business Support and NDIS Services Partner specializing in comprehensive business support and NDIS services. With a commitment to excellence and a wealth of expertise, we are here to assist organizations in implementing effective management systems and meeting the required policies and procedures.</p>
          <h6 className='my-4'>(A) Business Support:</h6>
          <p >(i) Operational Guidance: At CANOPUS CONSULTANTS, we offer invaluable operational guidance to our clients, ensuring that they adhere to essential management systems and protocols. Our expert team will support your organization in following the right policies and procedures, promoting efficiency and compliance.
          </p>
          <p>(ii) Development of Systems: For clients without existing documents and systems, including policies, procedures, and templates, our services extend to developing customized solutions. We tailor these systems to meet the specific requirements and standards of your organization, setting you up for success.
          </p>
          <p>(iii) Assessment of Existing Situation: If your organization already has documents and systems in place, we provide thorough assessments to determine if they align with the necessary requirements and standards. Our evaluation ensures that your business remains on the right track, identifying gaps and areas for improvement.

          </p>
          <p>(iv) Internal Audit: To guarantee ongoing compliance, CANOPUS CONSULTANTS conducts internal audits for providers. Through this process, we identify areas of improvement and ensure that your organization meets the necessary guidelines and regulations.
          </p>
          <p>(v) Ongoing Maintenance: We believe in building long-term partnerships with our clients. As such, our services extend to continuous support and maintenance to help your organization sustain the standards required for successful business operations.
          </p>
          <h6>(B) NDIS Services:
          </h6>
          <p>Consultancy, Verification, and Certification: In the ever-changing landscape of disability support, the National Disability Insurance Scheme (NDIS) plays a crucial role in transforming lives. At CANOPUS CONSULTANTS, we provide comprehensive consultancy services to assist you in navigating the NDIS system. We ensure that the right systems and protections are in place to oversee NDIS services and supports.
          </p>
          <p>The NDIS Quality and Safeguarding Framework is at the core of our approach, promoting high-quality supports and safe environments for all NDIS participants. As a registered provider, you can demonstrate your compliance with specific quality and safeguard requirements, opening doors to a broader range of participants and funding options.
          </p>
          <p>With CANOPUS CONSULTANTS by your side, you can be confident in meeting the stringent standards of the NDIS, connecting with participants and making a positive impact in the lives of people with disabilities across Australia.
          </p>
          <p>Partner with CANOPUS CONSULTANTS today and unlock the potential for growth, compliance, and success in your business endeavors. Our experienced team is ready to support you at every step, ensuring a harmonious journey towards excellence and empowerment.
          </p>
          <p className='mt-3'>
            For further details,
       
          </p>
        
          <a className='mt-4' href='https://canopusconsultants.com.au/ '><button className='btn btn-primary'>Visit our Website</button></a>
          <a className='mt-4 mx-3' href='https://canopusconsultants.com.au/ '><button className='btn btn-primary'><HiMail className='me-3'/> Send an email</button></a>

        </div>

      </div>


    </>
  )
}

export default InternationalPartners