import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import { useState, useEffect } from 'react'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import { saveAs } from 'file-saver';
import axios from 'axios'
import { base_url } from '../utils/base_url'
import { toast } from 'react-toastify'
import CircularProgress from '@mui/material/CircularProgress';
import { base_url_images } from '../utils/base_url'
import {NavLink} from 'react-router-dom'
import projectimg from '../assets/projects.jpg'
const Projects = () => {
  const handleDownload = (pdfaddress) => {
    saveAs(`${base_url_images}documents/${pdfaddress}`, 'Project.pdf');
  };
  const [activeNavItem, setActiveNavItem] = useState('All');
  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    getProjectsData(itemName)

  };
  const [getprojects, setprojects] = useState([])
  const [loading, setloadingpage] = useState(true)
  const [loadingproject, setloadingpageproject] = useState(true)
  const [getteamsdata, setteamsdata] = useState([])
  const getTeamData = async () => {
    const endpoint = `${base_url}/getprojectcategory`

    try {
      const response = await axios.get(endpoint)
      setteamsdata(response.data.projectcategory)
      setloadingpage(false)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  const getProjectsData = async (category = "All") => {
    setloadingpageproject(false)
    const endpoint = `${base_url}/getprojects?category=${encodeURIComponent(category)}`;
    try {
      const response = await axios.get(endpoint)
      setprojects(response.data.projects)
      setloadingpageproject(true)
    } catch (error) {
      toast.error(error.response.data.message)
    }


  }

  useEffect(() => {
    getTeamData()
    getProjectsData()

  }, [])

  return (
    <>
      <Hero title="Our Projects" img={projectimg} />

      {/* ============================================================== */}
      <div className='container'> <h3 className='my-5 text-center'>Our Projects</h3></div>
      {loading ? <div className='d-flex align-items-center justify-content-center'><CircularProgress /></div> : <div className='container d-flex flex-column flex-lg-row  flex-wrap align-items-start align-items-lg-center  justify-content-center  p-3'>
        <p className={`m-0 me-2 project-nav ${activeNavItem === 'All' ? 'active' : ''} cursor-pointer text-color-primary fw-bold   `} onClick={() => handleNavItemClick('All')}>All</p>

        {getteamsdata.map((element) => {
          return (
            <>
              <p className={`m-0 me-2 project-nav cursor-pointer ${activeNavItem === element.name ? 'active' : ''} text-color-primary fw-bold`} onClick={() => handleNavItemClick(element.name)}>{element.name}</p>
            </>
          )
        })

        }
      </div>}

      <section className="padding-top-50 padding-bottom-20">
        <div className="container">
         
         {loadingproject? <div className="row">
            {getprojects?.map((elements) => {
              return (
                <>
                  <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 p-2 p-lg-3 mb-3 '>

                    <div className="item-services  border">
                      <div className="thumbnail">
                        <div className="services-3-column-img-container">
                          <img src={`${base_url_images}documents/${elements.image}`} alt="imgservices" />
                          <h4 style={{ fontSize: "20px" }}>{elements.name} </h4>
                        </div>
                        <div className="caption p-2">
                          <p className='text-align-justify'>
                            {
                              elements.shortdescription
                            }
                          </p>
                          <div className='d-flex align-items-center justify-content-between mt-4'>
                            <h6>Client :</h6>
                            <h6 className='m-0 p-0 ms-3 mb-1'>{elements.client} </h6>
                          </div>
                          <div className='d-flex align-items-center justify-content-between mt-2'>
                            <h6>Country :</h6>
                            <h6 className='m-0 p-0 ms-3 mb-1'>{elements.country} </h6>
                          </div>
                          <div className='d-flex align-items-center justify-content-between mt-2 '>
                            <h6>Project Cost :</h6>
                            <h6 className='m-0 p-0 ms-3 mb-1'>${elements.cost}</h6>
                          </div>
                          <div className='mt-5 d-flex align-items-center  '>

                            {/* <button className='btn-outline btn-secondary-outline'>More Details</button> */}
                            <button className='btn-outline btn-secondary-outline ' style={{ background: "#01ABC8" }} onClick={() => handleDownload(elements.projectfile)}>Download <BsFillFileEarmarkPdfFill className=' ' /></button>
                            <NavLink to={`/project_details/${elements.name}/${elements._id}`}> <button className='btn-outline btn-secondary-outline ms-3' style={{ background: "#01ABC8" }} > See More</button></NavLink>

                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )
            })

            }
      

          </div>:<div className='my-5 d-flex align-items-center justify-content-center'><CircularProgress /></div>}
        </div>{/* End container */}
      </section>


    </>
  )
}

export default Projects