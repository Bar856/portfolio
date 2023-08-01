
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useEffect, useState, useRef } from "react";

export default function Contact() {

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const form = useRef();
  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      setButtonText("Sending...");
      emailjs.sendForm('default_service', 'template_uj7pjbt', form.current, 'HIWL-ouQJs3BV3Gax')
      .then(function(response) {
        setStatus({ success: true, message: 'Message sent successfully'});
        setButtonText("Sent")
        document.getElementById("my_form").reset();
      }, function(error) {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      })
    }catch(e){
      setButtonText("Send");
      console.error(e)
      setStatus({ success: false, message: 'Something went wrong, please try again later.'})
    }
  };
    return (
      <main id="contact"  className="min-h-screen flex flex-col center">
        <h1>Say Hi!</h1>
        <form id="my_form" ref={form} onSubmit={handleSubmit} className="form flex flex-col ">
          <input required name='first_name' className="formItem basis-1/4 rounded-lg" placeholder="First Name" type="text"></input>
          <input required name='last_name'  className="formItem basis-1/4 rounded-lg" placeholder="Last Name" type="text"></input>
          <input required name='from_email' className="formItem basis-1/4 rounded-lg" placeholder="Email Address" type="email"></input>
          <input required name='from_phone' className="formItem basis-1/4 rounded-lg" placeholder="Phone Number" type="tel"></input>
          <textarea required name='message' className="formItem basis-1/1 rounded-lg" placeholder="Message"></textarea>
          <button className='formItem formSubmit rounded-lg' type="submit">{buttonText}</button>
          {
            status.message && <p className={status.success === true ? "text-emerald-500" : "text-rose-500"}>{status.message}</p>
          }
        </form>
      </main>
    )
 }
  