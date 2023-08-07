import React from 'react'
import "./Topbar.css"
import { IoLocationOutline } from "react-icons/io5"
import { HiOutlinePhone } from "react-icons/hi"
import { AiOutlineMail } from "react-icons/ai"
import Socials from "../socialsIcons/SocialIcons"

const Topbar = () => {
  return (
    <>
      <div className='topbar container-fluid p-3   '>
        <div className='container px-lg-5 d-flex align-items-center justify-content-center justify-content-lg-between'>
          <div className='contact-details d-none   d-lg-flex align-items-center  '>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
              <IoLocationOutline className='text-light me-1' />
              <a href='https://goo.gl/maps/bJ1UoWTXp4YPPTPBA' target="_blank" rel="noreferrer" className='m-0 text-light topbarp'>38-Commercial, Imperial Gardens, Paragon, Barki Road, Lahore</a>
            </div>
            <div className='d-flex align-items-center me-3 cursor-pointer'>
              <HiOutlinePhone className='text-light me-1' />
              <a href="tel:+1967166879" className='m-0 text-light topbarp'> (+1) 96 716 6879</a>
            </div>
            <a href='https://mail.google.com/mail/?view=cm&to=team.ibci2023@gmail.com' target="_blank" rel="noreferrer" className='d-flex align-items-center me-3 cursor-pointer'>
              <AiOutlineMail className='text-light me-1' />
              <p className='m-0 text-light topbarp'>team.ibci2023@gmail.com</p>
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