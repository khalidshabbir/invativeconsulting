import React from 'react'
import "./Topbar.css"
import {IoLocationOutline} from "react-icons/io5"
import {HiOutlinePhone} from "react-icons/hi"
import {AiOutlineMail} from "react-icons/ai" 
import Socials from "../socialsIcons/SocialIcons"

const Topbar = () => {
  return (
    <>
    <div className='topbar container-fluid p-3   '>
    <div className='container px-lg-5 d-flex align-items-center justify-content-center justify-content-lg-between'>
        <div className='contact-details d-none   d-lg-flex align-items-center  '>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
             <IoLocationOutline className='text-light me-1'/>
             <p className='m-0 text-light topbarp'>8th floor, 379 Hudson St, New York, NY 10018</p>
            </div>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
            <HiOutlinePhone className='text-light me-1'/>
             <p className='m-0 text-light topbarp'>1-800-123-6879</p>
            </div>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
            <AiOutlineMail className='text-light me-1'/>
             <p className='m-0 text-light topbarp'>contact@finance.com</p>
            </div>
        </div>
      <div className=''>
        <Socials/>
      </div>
        
    </div>
    </div>
    
    </>
  )
}

export default Topbar