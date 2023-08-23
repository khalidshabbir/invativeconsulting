import React from 'react'
import { base_url } from '../utils/base_url';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver';
import { useParams } from 'react-router-dom'
import { base_url_images } from '../utils/base_url';
import CircularProgress from '@mui/material/CircularProgress';
const Project_Details = () => {
    const handleDownload = (pdfaddress) => {
        saveAs(`${base_url_images}documents/${pdfaddress}`, 'Project.pdf');
    };
    const { id } = useParams();
    const [getdata, setdata] = useState([])
    const [loading,setloading]=useState(true)
    const getdataFunction = async () => {
        setloading(false)
        const endpoint = `${base_url}/getprojectdetails/${id}`
        try {
            const response = await axios.get(endpoint);
            setdata(response.data.projectdetails);
            setloading(true)
        } catch (error) {

        }
    }

    useEffect(() => {
        getdataFunction()
    }, [])




    return (
        <>
            <div>
                <section className="bg-grey padding-top-45 padding-bottom-45 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <div className="col-md-12">
                                    <h2>Our Projects</h2>
                                </div>
                            </div>
                        </div>{/* End Row */}
                    </div>{/* End container */}
                </section>{/*  End Section */}
            {loading?   <div>
                <div className="no-padding border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ol className="breadcrumb breadcrumb-finance mt-3">
                                    <li className='text-dark me-2'>Project</li>
                                    <li className='text-dark me-2'>/</li>
                                    <li className='text-dark me-2'>{getdata?.category}</li>
                                    <li className='text-dark me-2'>/</li>
                                    <li className='text-dark me-2'>{getdata?.name}</li>
                                </ol>
                            </div>{/*  End col */}
                        </div> {/* End Row */}
                    </div>{/* End container */}
                </div>{/*  End Section */}
                <div className="line" />
                <section className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-3'>
                            <img src={`${base_url_images}documents/${getdata?.image}`} className="img-responsive img-header-detail" style={{ width: "100%", height: "450px", backgroundSize: "center" }} alt="imgservice" />
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-3'>
                            <h6 className='text-uppercase text-color-primary'>Project Details</h6>
                            <h4 className='fw-bold mt-3 text-color-secondary'>{getdata?.name}</h4>
                            <p className='mt-4'>{getdata?.shortdescription}</p>
                            <div className=''>
                                <table class="table">

                                    <tbody>
                                        <tr>
                                            <th >Client</th>
                                            <td>{getdata?.client}</td>

                                        </tr>
                                        <tr>
                                            <th >Period</th>
                                            <td>{getdata?.period}</td>

                                        </tr>
                                        <tr>
                                            <th >Category</th>
                                            <td>{getdata?.category}</td>

                                        </tr>
                                        <tr>
                                            <th >Cost</th>
                                            <td>${getdata?.cost}</td>

                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                            <div className='d-flex flex-wrap align-items-center'>
                                <a href={`${getdata?.website}`} target='_blank' rel="noreferrer"><button className='btn btn-primary mt-4 me-2'>Client Website</button></a>
                                <button className='btn btn-primary mt-4 me-2' onClick={() => handleDownload(getdata?.projectfile)}>Download</button>

                            </div>

                        </div>
                    </div>
                    <div className='mt-5 text-align-justify'>
                    <div dangerouslySetInnerHTML={{ __html: getdata?.desription }} />
                    </div>
                </section></div>:<div className='my-5 d-flex align-items-center justify-content-center'><CircularProgress /></div>}
            </div>
        </>
    )
}

export default Project_Details