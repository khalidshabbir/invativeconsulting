import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
const Error404 = () => {
  return (
    <>
      <Hero title="Page Not Found" img="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />



      <section id="section-404" className="no-padding">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-md-6 col-md-offset-1 col-sm-7">
              <div className="content-404 intro-text margin-top-170">
                <h2>404</h2>
                <p>Oop! We are sorry, the page not found!</p>
                <div className="divider-single" />
                <a href="/" className="ot-btn btn-main-color large-btn btn-rounded">Back to Prevew Page</a>
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <img alt src="images/404/404.png" className="img-responsive" />
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Error404