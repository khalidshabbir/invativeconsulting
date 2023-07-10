
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx"
import Logo from '../Logo'
import "./Navbar.css"
import Socials from '../socialsIcons/SocialIcons'
import { MdKeyboardArrowDown } from "react-icons/md"
import Topbar from "../Topbar/Topbar";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };



  return (
    <div className="navbarid sticky-top">

      {/* ====================================================================================== */}
      <div className="navbar navbar-expand-lg navbar-light bg-light    py-0 navwrapper  ">
        <div className="container  px-lg-5   ">
          <Logo className="navbar-brand " />

          <button
            className="navbar-toggler p-0 py-4  border-0 shadow-none "
            type="button"
            onClick={toggleDrawer}
          >
            <RxHamburgerMenu style={{ fontSize: "25px" }} />
          </button>

          <div className="collapse navbar-collapse justify-content-end navbardiv  " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active " aria-current="page" >
                  Home
                  <MdKeyboardArrowDown />
                </div>
                <ul className='drop-down-menu p-0 '>
                  <NavLink to="/" className="text-white"> <li>Home </li></NavLink>
                  <NavLink to="/" className="text-white"><li>International Partners </li></NavLink>
                  <NavLink to="/" className="text-white"><li>Associates National </li></NavLink>
                  <NavLink to="/" className="text-white"><li>Associates International </li></NavLink>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/aboutus">
                  About us

                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/services">
                  Services

                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/projects">
                  Projects

                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/partners">
                  International Partners

                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contactus">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ========================================================================== */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer} >
        <div className="drawer_wrapper " >
          <div className="drawer_logo  ps-3 ">
            <Logo />
          </div>
          <div className="drawer_menuw">
            <ul className="navbar-nav  mb-lg-0">
              {/* ==================================== */}
              <li className="nav-item accordion" id="accordionExample">
                <div className="accordion-item">
                  <div class=" p-0 " data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <div className="nav-link " aria-current="page" >
                      Home
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul className='  navbar-nav '  >
                        <li className="nav-item"><a className="nav-link text-dark">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-dark">International Partners</a></li>
                        <li className="nav-item"><a className="nav-link text-dark">Associates National</a></li>
                        <li className="nav-item"><a className="nav-link text-dark">Associates International</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* ======================== */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About us

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/services">
                  Services

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/projects">
                  Projects

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/projects">
                  International Partners

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/projects">
                  Contact us

                </a>
              </li>
            </ul>
            {/* ============================================== */}

          </div>

          <div className="socials d-flex align-items-center justify-content-center mt-5">
            <Socials />
          </div>

        </div>
      </Drawer>

    </div>
  );
}


