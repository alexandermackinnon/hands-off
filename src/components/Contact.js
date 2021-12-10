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
            <h4>E-mail</h4>
            <p>
              Have any questions or comments concerning Hands Off, or anything
              at all? Shoot me an e-mail! Please say{" "}
              <strong>'send e-mail'</strong> to proceed.
            </p>
          </div>
          <div className="contact-col">
            <img src={contact} alt="Photo d'Alexander MacKinnon" />
          </div>
          <div className="contact-col">
            <h4>Portfolio</h4>
            <p>
              To see more projects of mine, or simply to know more about me,
              feel free to visit my portfolio! Please say{" "}
              <strong>'visit portfolio'</strong> to proceed.
            </p>
          </div>
        </div>
      </div>
      <div className="links-wrapper centered-links">
        <div>
          <h4>Home</h4>
          <p>Say 'go to home'</p>
        </div>
        <div>
          <h4>About</h4>
          <p>Say 'go to project’</p>
        </div>
        <div>
          <h4>Accessibility</h4>
          <p>Say 'go to accessibility’</p>
        </div>
        <div>
          <h4 className="active-page">Contact</h4>
          <p>You are currently on this page.</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
