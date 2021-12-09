import React from "react";

function Home() {
  return (
    <>
      <div className="homepage-wrapper">
        <h1>HANDS OFF</h1>
        <div class="emblem">NAVIGUER AVEC LA VOIX </div>
      </div>
      <div className="links-wrapper centered-links">
        <div>
          <h4 class="active-page">Home</h4>
          <p>You are currently on this page.</p>
        </div>
        <div>
          <h4>About</h4>
          <p>Say 'go to project’ or ‘page 2’</p>
        </div>
        <div>
          <h4>Accessibility</h4>
          <p>Say 'go to accessibility’ or ‘page 3’</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Say 'go to contact’ or ‘page 4’</p>
        </div>
      </div>
    </>
  );
}

export default Home;
