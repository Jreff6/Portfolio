import './contactForm.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_Template)

    emailjs
      .sendForm(process.env.REACT_APP_Service , process.env.REACT_APP_Template , form.current, {
        publicKey: process.env.REACT_APP_Pkey ,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="user_name" className="contact-form__label">Nom</label>
            <input
                type="text"
                name="user_name"
                id="user_name"
                className="contact-form__input"
            />

            <label htmlFor="user_email" className="contact-form__label">Email</label>
            <input
                type="email"
                name="user_email"
                id="user_email"
                className="contact-form__input"
            />

            <label htmlFor="message" className="contact-form__label">Message</label>
            <textarea
                name="message"
                id="message"
                className="contact-form__textarea"
            />

            <input type="submit" value="Envoyer" className="contact-form__submit" />
        </form>
    );
}

export default ContactUs