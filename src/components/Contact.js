import React from "react";

// Import Media
import contact from "../medias/contact.png";

function Contact() {
  return (
    <>
      <div className="homepage-wrapper">
        <h1>CONTACT</h1>
        <div className="contact-info">
          <div className="contact-col">
            <h4>Courriel</h4>
            <p>
              Vous avez des questions ou des commentaires concernant Hands Off,
              ou n'importe quoi d'autre ? Envoyez-moi un courriel ! Veuillez
              dire <strong>'envoyer un message'</strong> pour procéder.
            </p>
          </div>
          <div className="contact-col">
            <img src={contact} alt="Alexander MacKinnon" />
          </div>
          <div className="contact-col">
            <h4>Portfolio</h4>
            <p>
              Pour voir d'autres de mes projets, ou simplement pour en savoir
              plus sur moi, n'hésitez pas à visiter mon portfolio ! Veuillez
              dire <strong>'visiter le portfolio'</strong> pour procéder.
            </p>
          </div>
        </div>
      </div>
      <div className="links-wrapper centered-links">
        <div>
          <h4>Accueil</h4>
          <p>Dites 'ouvrir accueil'</p>
        </div>
        <div>
          <h4>À propos</h4>
          <p>Dites 'ouvrir à propos'</p>
        </div>
        <div>
          <h4>Accessibilité</h4>
          <p>Dites 'ouvrir accessibilité'</p>
        </div>
        <div>
          <h4 className="active-page">Contact</h4>
          <p>Vous êtes présentement sur cette page.</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
