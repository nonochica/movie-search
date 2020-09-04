import React, { useState } from "react";
import falconForm, { isRequired, isEmail } from "falcon-form";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import './Login.css'


export const Login = () => {
  let [formInitialValues] = useState({
    email: "",
    password: ""
  }); 

  const formSubmitAction = values => {
    console.log("Form submitted", values);
  };

  const fieldValidators = {
    email: [isRequired, isEmail],
    password: [isRequired]
  };

  const { values, errors, fieldChange, formSubmit } = falconForm(
    formInitialValues,
    formSubmitAction,
    fieldValidators
  );


  return (
    <div>
      <Navbar />
      <div className="login-page">
        <h4 className="h4-login">Login</h4>
          <form className="form-login" onSubmit={formSubmit}>

              <div className="form-login-input">
                <label className="label-login" htmlFor="email">Email</label>
                <br />
                  <input className="login-input"
                    required
                    type="email"
                    name="email"
                    onChange={fieldChange}
                    value={values.email}
                  />
              </div>
            {errors.email}
            <br />

              <div className="form-login-input">
                <label className="label-login" htmlFor="password">Password</label>
                <br />
                  <input className="login-input"
                    required
                    type="password"
                    name="password"
                    onChange={fieldChange}
                    value={values.password}
                  />
              </div>
            {errors.password}
            <br />
            <br />

            <input className="boton-login" type="submit" value="Submit" />
          </form>
      </div>
      <Footer />
    </div>
  );
};