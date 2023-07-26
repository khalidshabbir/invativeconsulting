import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import { NavLink } from 'react-router-dom'
import criptoimg from '../assets/projects/cripto.jpg'
import projectdata from '../pages/Data/projects'
import { useState,useEffect } from 'react'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import { saveAs } from 'file-saver';
import pdfdownload from '../assets/Projectspdf.pdf'
const Projects = () => {
  const handleDownload = () => {
   
    const pdfUrl = pdfdownload;

    // Trigger the file download
    saveAs(pdfUrl, 'IBCI Projects Details.pdf');
  };
  const [getprojects,setprojects] =useState(projectdata)
  useEffect(()=>{
    setprojects(projectdata)
  },[])

  return (
    <>
      <Hero title="Our Projects" img="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />

      {/* ============================================================== */}
      <div className='container'> <h4 className='mt-5'>Our Projects</h4></div>
      <section className="padding-top-50 padding-bottom-20">
        <div className="container">
          <div className="row">
            {getprojects.map((elements)=>{
              return(
                <>
                 <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3 '>
              <NavLink to="/service_details/accounting&bookeeping/1">
                <div className="item-services border p-3">
                  <div className="thumbnail">
                    <div className="services-3-column-img-container">
                      <img src={elements.image} alt="imgservices" />
                      <h4 style={{ fontSize: "20px" }}>{elements.name} </h4>
                    </div>
                    <div className="caption">
                      <p>
                        {
                          elements.description
                        }
                      </p>
                      <div className='d-flex align-items-center justify-content-between mt-2'>
                        <h6>Country :</h6>
                        <h6 className='m-0 p-0 ms-3 mb-1'>{elements.country} </h6>
                      </div>
                      <div className='d-flex align-items-center justify-content-between mt-2 '>
                        <h6>Project Cost :</h6>
                        <h6 className='m-0 p-0 ms-3 mb-1'>{elements.cost}</h6>
                      </div>
                       <div className='mt-5 d-flex align-items-center justify-content-between '>
                      
                       {/* <button className='btn-outline btn-secondary-outline'>More Details</button> */}
                       <button className='btn-outline btn-secondary-outline ' style={{background:"#01ABC8"}} onClick={handleDownload}>Download <BsFillFileEarmarkPdfFill className=' ' /></button>
                      
                       </div>
                     
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
                </>
              )
            })
           
}
            {/* end column 1 */}

          </div>{/* End Row */}
        </div>{/* End container */}
      </section>


    </>
  )
}

export default Projects