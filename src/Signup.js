import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import "./Signup.css";

export default function Signup() {
  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(5, 'Maximum 5 letters').required('required'),
      lastName: Yup.string().max(5, 'Maximum 9 letters').required('required'),
      email: Yup.string().email('Invalid email address').required('required'),
    })
  });

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input 
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="First Name"
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        <input 
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Last Name"
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <input 
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}