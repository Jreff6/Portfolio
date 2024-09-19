import React from 'react';
import Navbar from '../../components/navbar/navbar'; // Assurez-vous d'importer correctement la navbar
import ContactForm from '../../components/Contact/ContactForm'; // Assurez-vous d'importer le composant ContactForm
import './contact.scss'; // Assurez-vous d'avoir le fichier de style associé

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
        {/* Deuxième section : Formulaire de contact */}
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
  );
}

export default Contact;
