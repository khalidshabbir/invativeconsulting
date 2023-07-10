import React from 'react'
import "./Process.css"
import processimg from '../../assets/ourprocess.jpg'
const Prcoess = () => {
    return (
        <>
            <section className="our-process bg-dark no-padding ">
                <div className="row">
                    <div className="process-warp">
                        <div className=" col-12 col-lg-6 img-demo-our-process d-none d-md-block">
                            <img src={processimg} className="img-responsive" style={{height:"100%"}} alt="Image" />
                        </div>
                        <div className=" col-12 col-lg-6 accordion-process padding-top-70 padding-bottom-50 d-block">
                            <div className=" pe-5 d-block">
                                <h2 className="title text-white">Our Process</h2>
                                <div class="accordion pe-lg-5" id="accordionExample">
                                    <div class="accordion-item mt-3 ">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                01. Define Objectives
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body text-white">
                                                <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat id. Vivamus interdum urna at sapien varius elementum. Suspendisse ut mi felis et interdum libero lacinia vel. Aenean elementum odio ut lorem cursus, eu auctor magna pellentesque.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header " id="headingTwo">
                                            <button class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                02. Develop a Plan
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body text-white">
                                                <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat id. Vivamus interdum urna at sapien varius elementum. Suspendisse ut mi felis et interdum libero lacinia vel. Aenean elementum odio ut lorem cursus, eu auctor magna pellentesque.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                03. Implementation
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body text-white">
                                                <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat id. Vivamus interdum urna at sapien varius elementum. Suspendisse ut mi felis et interdum libero lacinia vel. Aenean elementum odio ut lorem cursus, eu auctor magna pellentesque.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mt-3">
                                        <h2 class="accordion-header" id="headingFourth">
                                            <button class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                                                04. Monitor Results
                                            </button>
                                        </h2>
                                        <div id="collapseFourth" class="accordion-collapse collapse" aria-labelledby="headingFourth" data-bs-parent="#accordionExample">
                                            <div class="accordion-body text-white">
                                                <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat id. Vivamus interdum urna at sapien varius elementum. Suspendisse ut mi felis et interdum libero lacinia vel. Aenean elementum odio ut lorem cursus, eu auctor magna pellentesque.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                {/* ===================================================== */}
                            



                            </div>
                        </div> {/* End Col */}
                    </div>
                </div> {/* End Row */}
            </section>
{/* ======================================================================= */}
        </>
    )
}

export default Prcoess