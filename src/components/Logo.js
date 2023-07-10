import React from 'react'
import Logoimg from "../assets/logo.png"
const Logo = () => {
  return (
    <>
    <div className='logowrapper' >
    <a className="navbar-brand" href="/"><img src={Logoimg} alt='Logo'/></a>
    </div>
    
    </>
  )
}

export default Logo