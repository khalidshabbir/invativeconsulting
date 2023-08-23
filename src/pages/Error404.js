import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import error404 from '../assets/error404.jpg'
import error404404 from '../assets/404.png'
const Error404 = () => {
  return (
    <>
      <Hero title="Page Not Found" img={error404} />



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
              <img alt="404error" src={error404404} className="img-responsive" />
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Error404