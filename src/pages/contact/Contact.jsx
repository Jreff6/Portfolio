import React from 'react';
import Navbar from '../../components/navbar/navbar'; // Assurez-vous d'importer correctement la navbar
import ContactUs from '../../components/Contact/ContactForm'; // Assurez-vous d'importer le composant ContactForm
import './contact.scss'; // Assurez-vous d'avoir le fichier de style associé

function Contact() {
  return (
    <div className="contactWrap">
      <Navbar />
        <div className="contactForm">
          <ContactUs />
        </div>
      </div>
  );
}

export default Contact;
