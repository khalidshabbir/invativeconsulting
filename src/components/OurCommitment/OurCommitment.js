import React from 'react'
import "./OurCommitment.css"
const OurCommitment = () => {
    return (
        <>
            <section className="no-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 d-none d-lg-block">
                            <div className="col-xs-12 col-sm-3 col-md-6 hidden-xs thumbs-style-2">
                                <img src="images/Commitment/2.png" className="img-responsive" alt="Image" />
                            </div> {/* End col */}
                            {/* End col */}
                        </div>
                        <div className="col-12  col-md-6 col-lg-6  bar-chart-container chart-style-2">
                            <h2 className="normal-font">Why Choose Us</h2>
                            <div className="clearfix" />
                            <p>
                            Who we are, how we work, our priorities and our values. Phasellus mauris arcu, facilisis vel velit vitae, tincidunt scelerisque mauris. Phasellus placerat elementum ornare. Cras scelerisque eu metus tincidunt euismod.
                            </p>
                            <div className="chart-2 chart-home-2" id="chart-2">
                               
                       
                                <div className="skill-box">
                                    <span className="title">INCOME</span>
                                    <div className="skill-bar" >
                                        <span className="skill-per" style={{width:"90%"}}>
                                            <span className="tooltip_progress me-2">90%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">OPPORTUNITY</span>
                                    <div className="skill-bar" >
                                        <span className="skill-per" style={{width:"80%"}}>
                                            <span className="tooltip_progress me-2">80%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <span className="title">TRANSFORMATION</span>
                                    <div className="skill-bar" >
                                        <span className="skill-per" style={{width:"70%"}}>
                                            <span className="tooltip_progress me-2">70%</span>
                                        </span>
                                    </div>
                                </div>
                            </div> {/* End chart */}
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}

export default OurCommitment