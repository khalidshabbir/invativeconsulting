import React from 'react'
import {AiOutlineMail} from "react-icons/ai" 
import {BiLogoFacebook} from "react-icons/bi"  
import {BiLogoLinkedin} from "react-icons/bi"  
import {AiFillInstagram} from "react-icons/ai"  
import {AiOutlineTwitter} from "react-icons/ai"  
import {BsWhatsapp} from "react-icons/bs"
const SocialIcons = (props) => {
    const { iconsize } = props;

    const size= iconsize || '14px';
    return (
        <>
            <div className='socials-icons d-flex align-items-center'>
                <a  href='https://mail.google.com/mail/?view=cm&to=team.ibci2023@gmail.com' target="_blank" rel="noreferrer" className='social_icon me-2 text-light mail'><AiOutlineMail  style={{ fontSize: `${size}` }} /></a>
                <a href='https://www.linkedin.com/in/ibci-consultants-671976285/' target="_blank" rel="noreferrer" className='social_icon me-2 text-light linkedin'><BiLogoLinkedin  style={{ fontSize:  `${size}` }}/></a>
                <a href='/' className='social_icon me-2 text-light facebook'><BiLogoFacebook  style={{ fontSize:  `${size}` }}/></a>
                <a href='/' className='social_icon me-2 text-light instagram'><AiFillInstagram style={{ fontSize:  `${size}` }} /></a>
                <a href='/' className='social_icon me-2 text-light twitter'><AiOutlineTwitter  style={{ fontSize:  `${size}` }}/></a>
                <a href='https://wa.me/+923350402576' target="_blank" rel="noreferrer" className='social_icon me-2 text-light whatsapp'><BsWhatsapp style={{ fontSize:  `${size}` }} /></a>
            </div>

        </>
    )
}

export default SocialIcons