import { useFormik } from 'formik';
import React from 'react';

export default function Signup() {
  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return(
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input 
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          placeholder="First Name"
          value={formik.values.firstName}
        />
        <input 
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          placeholder="Last Name"
          value={formik.values.lastName}
        />
        <input 
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          placeholder="Email"
          value={formik.values.email}
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}