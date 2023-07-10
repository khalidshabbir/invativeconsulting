import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import aboutus from '../assets/aboutus.jpg'
import missionimg from "../assets/mission.png"
import vissionimg from "../assets/vision.png"
import valuesimg from "../assets/values.png"
import Team from "../components/Team/Team"
import ReactPlayer from 'react-player'
const About = () => {
  return (
    <>
      <Hero title="About Us" img={aboutus} />
      {/* ====================================== */}
      <section className="bg-grey py-5">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-md-12">
              <div className="counter-up counter-up-style-1 text-center">
                <h2>We are help you to grow your business</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id lectus quis dui euismod consectetur. Pellentesque ac ante sollicitudin, tincidunt nulla in, bibendum massa. Phasellus bibendum, sem velue aliquam gravida, eros ex dapibus neque, eget fermentum dolor arcu a tortor. Integer placerat massa nec elit egestas efficitur. </p>

              </div>{/* End counter up */}
            </div> {/* End cold */}
          </div>{/* End row */}
        </div>{/* End container */}
      </section>


      {/* ======================================== */}
      <section className='missionvision  my-5'>
        <div className='container px-lg-5'>
        <div className='row'>
        <div className='col-12 col-md-4 px-3'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
          <img src={missionimg} style={{width:"200px",height:"200px"}} alt='' />
          <h4>Our Mission</h4>
          <div className='text-center' style={{}}>
          <p>Duis nunc tortor, condimentum porta leo id, tempus mollis nulla. Suspendisse blandit congue rutrum. Proin nec porttitor arcu. Etiam a dictum odio.</p>

          </div>
        </div>
        </div>
        <div className='col-12 col-md-4 px-3'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
          <img src={vissionimg} style={{width:"200px",height:"200px"}} alt='' />
          <h4>Our Vissoion</h4>
          <div className='text-center' style={{}}>
          <p>Duis nunc tortor, condimentum porta leo id, tempus mollis nulla. Suspendisse blandit congue rutrum. Proin nec porttitor arcu. Etiam a dictum odio.</p>

          </div>
        </div>
        </div>
        <div className='col-12 col-md-4 px-3'>
        <div className='d-flex flex-column align-items-center justify-content-center '>
          <img src={valuesimg} style={{width:"200px",height:"200px"}} alt='' />
          <h4>Our Values</h4>
          <div className='text-center' style={{}}>
          <p>Duis nunc tortor, condimentum porta leo id, tempus mollis nulla. Suspendisse blandit congue rutrum. Proin nec porttitor arcu. Etiam a dictum odio.</p>

          </div>
        </div>
        </div>
     
       
        </div>
        </div>
      </section>


{/* ======================================================== */}
    <section className='bg-grey py-5'>
      <div className='container px-lg-5'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div>
            <h4>How We Work With You</h4>
            <p> Sed vel bibendum urna, in blandit nunc. Praesent eget mauris auctor, efficitur justo sed, consectetur dolor. Cras aliquet mi vitae convallis luctus. Aenean imperdiet mi et eleifend efficitur.
            Sed vel bibendum urna, in blandit nunc. Praesent eget mauris auctor, efficitur justo sed, consectetur dolor. Cras aliquet mi vitae convallis luctus. Aenean imperdiet mi et eleifend efficitur.
            </p>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='d-flex align-items-end justify-content-end'>
          <ReactPlayer className="m-0 p-0 " width={"100%"}  url='https://youtu.be/EE1ZESK5sCY' />
          </div>
         
        </div>
      </div>
      </div>
    </section>
    {/* ===================================== */}
    <Team bg="bg-white" />
    </>
  )
}

export default About