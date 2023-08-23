import React from 'react'
import "./Topbar.css"
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlinePhone } from "react-icons/hi"
import { AiOutlineMail } from "react-icons/ai"
import Socials from "../socialsIcons/SocialIcons"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { base_url } from '../../utils/base_url'
const Topbar = () => {
 
  const [getdata, setdata] = useState([]);
  const getdataFunciton = async () => {
      const endpoint = `${base_url}/getcontactus`
      try {
          const response = await axios.get(endpoint);
          const data = response.data.contactus;

          setdata(data)

      } catch (error) {

      }
  }
  useEffect(() => {
      getdataFunciton()
  }, [])
  return (
    <>
      <div className='topbar container-fluid p-3   '>
        <div className='container px-lg-5 d-flex align-items-center justify-content-center justify-content-lg-between'>
          <div className='contact-details d-none   d-lg-flex align-items-center  '>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
              <IoLocationOutline className='text-light me-1' />
              <a href='https://goo.gl/maps/bJ1UoWTXp4YPPTPBA' target="_blank" rel="noreferrer" className='m-0 text-light topbarp'>{getdata?.location}</a>
            </div>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
              <HiOutlinePhone className='text-light me-1' />
              <a href="tel:+1967166879" className='m-0 text-light topbarp'>+{getdata?.phone}</a>
            </div>
            <a href={`https://mail.google.com/mail/?view=cm&to=${getdata?.email}`} target="_blank" rel="noreferrer" className='d-flex align-items-center me-3 cursor-pointer'>
              <AiOutlineMail className='text-light me-1' />
              <p className='m-0 text-light topbarp'>{getdata?.email}</p>
            </a>
          </div>
          <div className=''>
            <Socials />
          </div>

        </div>
      </div>

    </>
  )
}

export default Topbar