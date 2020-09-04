import React, { useState } from "react";
// import axios from 'axios'
import falconForm, { isRequired, isEmail} from "falcon-form";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

import './Contact.css'
// import Buttonform from '../components/Buttons/Buttonform'


export const Contact = () => {
    let [formInitialValues] = useState({
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: ""
    }); 
  
    const formSubmitAction = values => {
      console.log("Form submitted", values);
    };
  
    const fieldValidators = {
      name: [isRequired],
      surname: [isRequired],
      email: [isRequired, isEmail],
      phone: [isRequired],
      message: [isRequired]
    };
  
    const { values, errors, fieldChange, formSubmit } = falconForm(
      formInitialValues,
      formSubmitAction,
      fieldValidators
    );
  
  
    return (
        <div>
            <Navbar />
            <div className="contact">
                <div className="info">
                    <p className="info-text">For any questions or suggestions, you can contact us by filling out the form</p>
                </div>

                <div className="formulario">
                    <h4 className="formulario_h4">Let's talk</h4>
                    <form className="form" onSubmit={formSubmit}>
                        <div className="form-input">
                                <label htmlFor="name">Name</label>
                                <input 
                                className="contact_input" 
                                type="text" 
                                name="name" 
                                tabindex="1"
                                value={values.name} 
                                onChange={fieldChange}/>
                        </div>
                            {errors.name}

                        <div className="form-input">
                                <label htmlFor="surname">Surname</label>
                                <input 
                                className="contact_input" 
                                type="text" 
                                name="surname" 
                                tabindex="2"
                                value={values.surname} 
                                onChange={fieldChange}/>
                        </div>
                            {errors.surname}

                        <div className="form-input">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                className="contact_input" 
                                type="email" 
                                name="email" 
                                tabindex="3" 
                                value={values.email} 
                                onChange={fieldChange}/>
                        </div>
                            {errors.email}

                        <div className="form-input">
                                <label htmlFor="exampleInputPhone">Phone number</label>
                                <input 
                                className="contact_input" 
                                type="tel" 
                                name="phone" 
                                tabindex="4" 
                                value={values.phone} 
                                onChange={fieldChange} />
                        </div>
                            {errors.phone}
                            
                            <textarea 
                                type="text"
                                name="message" 
                                placeholder="Write your message here" 
                                tabindex="5" 
                                value={values.message}  
                                onChange={fieldChange} >
                            </textarea>
                            {errors.message}
                            
                            <input name="button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

