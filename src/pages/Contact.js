// import React, { Component } from "react";
// import axios from 'axios'
// import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer'

// import './Contact.css'
// import Buttonform from '../components/Buttons/Buttonform'



// export class Contact extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           name: '',
//           surname:'',
//           email: '',
//           phone: '',
//           message: ''
//         }
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         axios({
//           method: "POST", 
//           url:"http://localhost:3000/contact", 
//           data:  this.state
//         }).then((response)=>{
//           if (response.data.status === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//           }else if(response.data.status === 'fail'){
//             alert("Message failed to send.")
//           }
//         })
//     }
//     resetForm(){
//         this.setState({name: '', surname:'', email: '', phone: '', message: ''})
//     }


//     render() {
//         return(
//             <div>
//                 <Navbar />
//                 <div className="contact">
//                     <div className="info">
//                         <p className="info-text">For any questions or suggestions, you can contact us by filling out the form</p>
//                     </div>

//                     <div className="formulario">
//                         <h4 className="formulario_h4">Let's talk</h4>
//                             <form className="form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//                                 <div className="form-input">
//                                     <label htmlFor="name">Name</label>
//                                     <input className="contact_input" type="text" name="nombre" tabindex="1"id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//                                 </div>

//                                 <div className="form-input">
//                                     <label htmlFor="surname">Surname</label>
//                                     <input className="contact_input" type="text" name="surname" tabindex="2"id="surname" value={this.state.surname} onChange={this.onSurnameChange.bind(this)} />
//                                 </div>

//                                 <div className="form-input">
//                                     <label htmlFor="exampleInputEmail1">Email address</label>
//                                     <input className="contact_input" type="email" name="email" tabindex="3" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//                                 </div>

//                                 <div className="form-input">
//                                     <label htmlFor="exampleInputPhone">Phone number</label>
//                                     <input className="contact_input" type="tel" name="phone" tabindex="4" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
//                                 </div>
                                
//                                 <textarea name="mensaje" placeholder="Write your message here" id="message" tabindex="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
//                                 <Buttonform />
//                             </form>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
//     onNameChange(event) {
//         this.setState({name: event.target.value})
//     }
//     onSurnameChange(event) {
//         this.setState({surname: event.target.value})
//     }
    
//     onEmailChange(event) {
//         this.setState({email: event.target.value})
//     }

//     onPhoneChange(event) {
//         this.setState({phone: event.target.value})
//     }
    
//     onMessageChange(event) {
//         this.setState({message: event.target.value})
//     }
// }

// export default Contact;



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
  
    const { values, fieldChange, formSubmit } = falconForm(
      formInitialValues,
      formSubmitAction,
      fieldValidators
    );
  
    return(
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
                                    required
                                    className="contact_input" 
                                    type="text" 
                                    name="name" 
                                    value={values.name} 
                                    onChange={fieldChange}/>
                                </div>
                                
                                <div className="form-input">
                                    <label htmlFor="surname">Surname</label>
                                    <input 
                                    required
                                    className="contact_input" 
                                    type="text" 
                                    name="surname"
                                    value={values.surname} 
                                    onChange={fieldChange} />
                                </div>
                             
                                <div className="form-input">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input 
                                    required
                                    className="contact_input" 
                                    type="email" 
                                    name="email" 
                                    value={values.email} 
                                    onChange={fieldChange}/>
                                </div>
                               

                                <div className="form-input">
                                    <label htmlFor="exampleInputPhone">Phone number</label>
                                    <input 
                                    required
                                    className="contact_input" 
                                    type="tel" 
                                    name="phone" 
                                    value={values.phone} 
                                    onChange={fieldChange}/>
                                </div>
                               
                                
                                <textarea 
                                    required
                                    type="text"
                                    name="message" 
                                    placeholder="Write your message here" 
                                    value={values.message}  
                                    onChange={fieldChange} >
                                </textarea>
                               
                                <input className="boton-contact" type="submit" value="Submit" />

                            </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};



