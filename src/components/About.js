import React from "react";

// Import Media
import project from "../medias/project.png";

function About() {
  return (
    <>
      <div className="page-wrapper">
        <div className="left-column">
          <p>
            More than half a century ago, the first prototype of the personal
            computer appeared, that is, the model with mouse and keyboard that
            is now a generational essential in our daily life. As time goes by,
            technology advances inordinately fast, and without seeing it pass,
            perhaps in a few years these computer accessories will be considered
            as old machines. To prepare for such a change, the Web will have to
            adapt accordingly. This is where the idea of launching the Hands Off
            project comes from: a Web site that differs from the conventional
            model. You can say goodbye to the keyboard and mouse - it is
            entirely navigable by voice. No need to scroll, click, or type. The
            page is displayed at the height and length of the screen, and
            hyperlinks are accessible through voice recognition shortcuts. Hands
            Off is a blueprint, a foundation, but most importantly, a test of
            whether or not we will need the computer keyboard and mouse to surf
            the Web of the future.
          </p>
          <br />
          <p>
            Want to read more about the project? Read the Hands Off project
            report by saying <strong>'download report'.</strong>
          </p>
        </div>
        <div className="right-column">
          <img src={project} alt="Woman using the Hands Off software" />
          <h2>
            SO WHAT IS <br />
            HANDS OFF?
          </h2>
        </div>
      </div>
      <div className="links-wrapper left-links">
        <div>
          <h4>Home</h4>
          <p>Say 'go to home’</p>
        </div>
        <div>
          <h4 className="active-page">About</h4>
          <p>You are currently on this page.</p>
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

export default About;
