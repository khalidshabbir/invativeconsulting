import React from 'react'
import { FaChartBar } from 'react-icons/fa'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsCalculator } from 'react-icons/bs'
import { RiBankFill } from 'react-icons/ri'
import { MdSecurity } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

const WhyChooseus = () => {
    return (
        <>
            <section className="bg-white py-5">
                <div className="container px-lg-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex algin-items-center justify-content-center '><h2 className="title text-center ">Why Choose Us?</h2></div>
                            
                            <div className="row clearfix mt-5">
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <div className=''>
                                                    <FaChartBar className='' style={{ fontSize: '24px' }} />
                                                </div>

                                            </div>
                                            <div className="media-body">
                                                <h4>Financial </h4>
                                                <p>
                                                    Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <FaRegMoneyBillAlt style={{ fontSize: '24px' }} />
                                            </div>
                                            <div className="media-body">
                                                <h4>Investments Management </h4>
                                                <p>
                                                    Quisque mollis metus magna, ut accumsan elit hendrerit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <BsCalculator style={{ fontSize: '24px' }} />
                                            </div>
                                            <div className="media-body">
                                                <h4>Taxes Planning </h4>
                                                <p>
                                                    Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <RiBankFill style={{ fontSize: '24px' }} />
                                            </div>
                                            <div className="media-body">
                                                <h4>Business Loan </h4>
                                                <p>
                                                    Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <MdSecurity style={{ fontSize: '24px' }} />
                                            </div>
                                            <div className="media-body">
                                                <h4>Insurance Consulting </h4>
                                                <p>
                                                    Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                                <article className="col-sm-6 col-md-4 media-style media-left-icon-item">
                                    <div className="media">
                                        <div className='d-flex algin-items-center'>
                                            <div className="media-left">
                                                <AiFillHome style={{ fontSize: '24px' }} />
                                            </div>
                                            <div className="media-body">
                                                <h4>Retirement Planning</h4>
                                                <p>
                                                    Donec lacinia mi rutrum sagittis consequat. Donec sagittis, tellus sodales sollicitudin commodo, risus urna interdum massa
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </article>

                            </div>
                        </div>{/* End Row */}
                    </div> {/* End Row */}
                </div>{/* End container */}
            </section>

        </>
    )
}

export default WhyChooseus