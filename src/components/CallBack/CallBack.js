import React, { useState } from 'react'
import "./CallBack.css"
import { Formik, Form, Field } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { IoIosCall } from 'react-icons/io'
import SocialIcons from '../socialsIcons/SocialIcons';
import { base_url } from '../../utils/base_url';
import {toast} from 'react-toastify'
import axios from 'axios'
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    message: Yup.string().required('Message is required'),
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

const CallBack = () => {
    const [loading,setloading]=useState(false)
    const handleSubmit = async(values,{ resetForm }) => {
        setloading(true)
        const endpoint=`${base_url}/useremail`
        try{
        const response=await axios.post(endpoint,{name:values.name,email:values.email,phone:values.phone,message:values.message})
        resetForm()
        toast(response.data.message)
        setloading(false)
        
        }catch(error){
           toast(error.response.data.message)
        }
       
       };
    return (
        <>
            <section className="bg-dark py-5">
                <div className="container">
                    <div className="row d-flex align-items-start">
                        <div className="col-md-6 ">
                            <div className='d-flex flex-column align-items-lg-end'>
                                <h2 className="text-white">Get a Call Back</h2>
                                <p className="text-grey mb-lg-4 mb-md-3 text-lg-end">If you need to speak to us about<br/> a general query fill in the form below and <br/>we will call you back within the same working day.</p>
                                <div className=' text-white'>
                                    <li className='cursor-pointer'><p className='iconsbtns'><IoIosCall />&nbsp;&nbsp;+923350402576
                                    </p>
                                    </li>
                                    <li className='cursor-pointer'><p><IoIosCall /> &nbsp;+923350402576</p>
                                    </li>
                                </div>
                                <h3 className="text-white mb-3">Follow Us</h3>
                                    <SocialIcons />

                            </div>
                        


                        </div>
                        <div className="col-md-6 get-call-back-right">
                            <div className="call-back-form">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {(formik) => (
                                        <Form >
                                            <Field
                                                className="callbackfrom"
                                                as={TextField}
                                                label="Name"
                                                name="name"
                                                fullWidth
                                                size="small"
                                                margin="normal"
                                                
                                                error={formik.touched.name && formik.errors.name}
                                                helperText={formik.touched.name && formik.errors.name}
                                                InputLabelProps={{
                                                    style: { color: 'white' } // Change the color to your desired color
                                                }}
                                                InputProps={{
                                                    style: { color: 'white',background:"#3b3b3bd2"} // Change the color to your desired color
                                                }}
                                               
                                            />

                                            <Field
                                                as={TextField}
                                                className="callbackfrom"
                                                label="Email"
                                                name="email"
                                                size="small"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={formik.touched.email && formik.errors.email}
                                                helperText={formik.touched.email && formik.errors.email}
                                                InputLabelProps={{
                                                    style: { color: 'white' } // Change the color to your desired color
                                                }}
                                                InputProps={{
                                                    style: { color: 'white',background:"#3b3b3bd2"} // Change the color to your desired color
                                                }}
                                            />

                                            <Field
                                                as={TextField}
                                                className="callbackfrom"
                                                label="Phone"
                                                name="phone"
                                                size="small"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={formik.touched.phone && formik.errors.phone}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                                InputLabelProps={{
                                                    style: { color: 'white' } // Change the color to your desired color
                                                }}
                                                InputProps={{
                                                    style: { color: 'white',background:"#3b3b3bd2"} // Change the color to your desired color
                                                }}
                                            />

                                            <Field
                                                as={TextField}
                                                className="callbackfrom"
                                                label="Message"
                                                name="message"
                                                size="small"
                                                variant="outlined"
                                                color="primary"
                                                multiline
                                                rows={4}
                                                fullWidth
                                                margin="normal"
                                                error={formik.touched.message && formik.errors.message}
                                                helperText={formik.touched.message && formik.errors.message}
                                                InputLabelProps={{
                                                    style: { color: 'white' }
                                                }}
                                                InputProps={{
                                                    style: { color: 'white',background:"#3b3b3bd2"} // Change the color to your desired color
                                                }}
                                             


                                            />



                                            <LoadingButton className='mt-3' fullWidth style={{ background: "#01ABC8" }} type="submit" loading={loading} variant="contained">
                                                Send
                                            </LoadingButton>
                                        </Form>
                                    )}
                                </Formik>
                            </div>{/* End call back form */}
                        </div>
                    </div>{/* End row */}
                </div>{/* End container */}
            </section>



        </>
    )
}

export default CallBack