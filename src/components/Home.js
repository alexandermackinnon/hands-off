import React from "react";

function Home() {
  return (
    <>
      <div className="homepage-wrapper">
        <h1>HANDS OFF</h1>
        <div className="emblem">NAVIGUER AVEC LA VOIX </div>
      </div>
      <div className="links-wrapper centered-links">
        <div>
          <h4 className="active-page">Home</h4>
          <p>You are currently on this page.</p>
        </div>
        <div>
          <h4>About</h4>
          <p>Say 'go to about'</p>
        </div>
        <div>
          <h4>Accessibility</h4>
          <p>Say 'go to accessibility’</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Say 'go to contact’</p>
        </div>
      </div>
    </>
  );
}

export default Home;
