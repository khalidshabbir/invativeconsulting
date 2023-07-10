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
                <div className='social_icon me-2 text-light mail'><AiOutlineMail  style={{ fontSize: `${size}` }} /></div>
                <div className='social_icon me-2 text-light linkedin'><BiLogoLinkedin  style={{ fontSize:  `${size}` }}/></div>
                <div className='social_icon me-2 text-light facebook'><BiLogoFacebook  style={{ fontSize:  `${size}` }}/></div>
                <div className='social_icon me-2 text-light instagram'><AiFillInstagram style={{ fontSize:  `${size}` }} /></div>
                <div className='social_icon me-2 text-light twitter'><AiOutlineTwitter  style={{ fontSize:  `${size}` }}/></div>
                <div className='social_icon me-2 text-light whatsapp'><BsWhatsapp style={{ fontSize:  `${size}` }} /></div>
            </div>

        </>
    )
}

export default SocialIcons