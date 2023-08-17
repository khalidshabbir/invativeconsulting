import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import { base_url } from '../../utils/base_url'
import axios from 'axios'
import { useState,useEffect } from 'react'
const SocialIcons = (props) => {
    const { iconsize } = props;
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
    const size = iconsize || '14px';
    return (
        <>
            <div className='socials-icons d-flex align-items-center'>
                <a href={`https://mail.google.com/mail/?view=cm&to=${getdata.email}`} target="_blank" rel="noreferrer" className='social_icon me-2 text-light mail'><AiOutlineMail style={{ fontSize: `${size}` }} /></a>
                <a href={`${getdata.linkedin}`} target="_blank" rel="noreferrer" className='social_icon me-2 text-light linkedin'><BiLogoLinkedin style={{ fontSize: `${size}` }} /></a>
                <a href='/' className='social_icon me-2 text-light facebook'><BiLogoFacebook style={{ fontSize: `${size}` }} /></a>
                <a href='/' className='social_icon me-2 text-light instagram'><AiFillInstagram style={{ fontSize: `${size}` }} /></a>
                <a href='/' className='social_icon me-2 text-light twitter'><AiOutlineTwitter style={{ fontSize: `${size}` }} /></a>
                <a href={`https://wa.me/+${getdata.whatsapp}`} target="_blank" rel="noreferrer" className='social_icon me-2 text-light whatsapp'><BsWhatsapp style={{ fontSize: `${size}` }} /></a>
            </div>

        </>
    )
}

export default SocialIcons