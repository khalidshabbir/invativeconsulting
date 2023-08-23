import React from 'react'
import Hero from "../components/HeroSection/HeroSection"
import { FaHome } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { BiTime } from "react-icons/bi"
import imgs from "../assets/contactus.jpg"
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Formik, Form, Field } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { IoIosCall } from 'react-icons/io'
import SocialIcons from '../components/socialsIcons/SocialIcons';
import { base_url } from '../utils/base_url';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
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
const Contactus = () => {
  const [getdata, setdata] = useState([]);
  const [loading, setloading] = useState(false)
  const [loadingdata,setloadingdata]=useState(false)
  const getdataFunciton = async () => {
    setloadingdata(false)
    const endpoint = `${base_url}/getcontactus`
    try {
      const response = await axios.get(endpoint);
      const data = response.data.contactus;

      setdata(data)
      setloadingdata(true)
    } catch (error) {

    }
  }

  const handleSubmit = async (values, { resetForm }) => {
    setloading(true)
    const endpoint = `${base_url}/useremail`
    try {
      const response = await axios.post(endpoint, { name: values.name, email: values.email, phone: values.phone, message: values.message })
      resetForm()
      toast(response.data.message)
      setloading(false)

    } catch (error) {
      toast(error.response.data.message)
    }

  };

  useEffect(() => {
    getdataFunciton()
  }, [])

  return (
    <>
      <Hero title="Contact Us" img={imgs} />
      {/* ======================================Contact us========================== */}
      <section className="padding-top:50px;">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 left-contact">
              <h4> Send Us a Message</h4>
              <div className='me-lg-5 me-md-4 me-sm-3'>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form >
                      <Field
                        as={TextField}
                        label="Name"
                        name="name"
                        fullWidth
                        size="small"
                        margin="normal"
                        error={formik.touched.name && formik.errors.name}
                        helperText={formik.touched.name && formik.errors.name}

                      />

                      <Field
                        as={TextField}
                        label="Email"
                        name="email"
                        size="small"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={formik.touched.email && formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}

                      />

                      <Field
                        as={TextField}
                        label="Phone"
                        name="phone"
                        size="small"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={formik.touched.phone && formik.errors.phone}
                        helperText={formik.touched.phone && formik.errors.phone}

                      />

                      <Field
                        as={TextField}
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

                      />

                      <LoadingButton className='mt-3' fullWidth style={{ background: "#01ABC8" }} type="submit" loading={loading} variant="contained">
                        Send
                      </LoadingButton>
                    </Form>
                  )}
                </Formik>
              </div>

            </div> {/* End col */}
            <div className="col-12 col-lg-4 right-contact mt-5 mt-lg-0">
              {
                <div className='contactinfo'>
                  <h4>Contact Info</h4>
                  <p>
                    IBCI is a renowned international consulting firm committed to empowering clients with tailored financial management solutions.
                  </p>
                  {
                   loadingdata?   <ul className="address">
                    <li className='cursor-pointer'><p><FaHome />&nbsp;&nbsp; {getdata.location}</p></li>
                    <li className='cursor-pointer'><p><IoIosCall />&nbsp;&nbsp;+{getdata.phone}
                    </p></li>
                    <li className='cursor-pointer'><p><IoIosCall /> &nbsp;+{getdata.phone1}</p></li>
                    <a className='text-dark' href={`https://mail.google.com/mail/?view=cm&to=${getdata.email}`} target="_blank" rel="noreferrer"> <li className='cursor-pointer'><p><FiMail />&nbsp;&nbsp;{getdata.email}</p></li></a>
                    <li className='cursor-pointer'><p><BiTime />&nbsp;&nbsp; {getdata.timing}</p></li>
                  </ul>:<div className='my-5 d-flex align-items-center justify-content-center'><CircularProgress /></div>
                  }
               
                </div>
              }

              <div className='folows'>
                <h4 className='mt-5 mb-4'>Follow Us</h4>
                <SocialIcons iconsize="24px" />
              </div>
            </div> {/* End col */}
          </div>
          <div className='w-100 mt-5'>
            <h4>Our Office</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11356.857050382052!2d74.45139533210852!3d31.527437379751174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s38-Commercial%2C%20Imperial%20Gardens%2C%20Paragon%2C%20Barki%C2%A0Road%2C%C2%A0Lahore!5e0!3m2!1sen!2s!4v1691446020154!5m2!1sen!2s" title="office address" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contactus