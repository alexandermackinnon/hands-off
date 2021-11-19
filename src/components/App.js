import React, { useState } from "react";

// Import Pages
import Home from "./Home";
import Project from "./About";
import Accessibility from "./Accessibility";
import Contact from "./Contact";

// Import Media
import bg from "../medias/bg.mp4";

// Import React Router
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// Import Speech Recognition
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const commands = [
    {
      command: ["Aller à *", "Ouvrir *", "Go to *", "Open *", "*"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState(""); // State

  // Array of pages
  const pages = [
    "home",
    "project",
    "Project",
    "accessibility",
    "contact",
    "contacts",
  ];

  const urls = {
    home: "/",
    project: "project",
    Project: "/Project",
    accessibility: "/accessibility",
    contact: "/contact",
    contacts: "/contact",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  // Redirection
  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p id="notFound">Page non trouvée: {redirectUrl}</p>;
    }
  }

  // Commencer à écouter
  if (SpeechRecognition.browserSupportsContinuousListening) {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  } else {
    <button
      onClick={SpeechRecognition.startListening({
        language: "en-US",
      })}
    >
      Commencer
    </button>;
  }

  return (
    <div className="App">
      <video playsInline autoPlay muted loop poster={bg} className="bgvid">
        <source src={bg} type="video/mp4" />
      </video>
      <header>
        <div className="logo-wrapper">
          <p>HO</p>
          <div id="loader">
            <div className="line-scale-pulse-out">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <p id="transcript">
            <strong>Transcription</strong>: {transcript}
          </p>
        </div>
        <div className="links-wrapper">
          <p>Accueil</p>
          <p>Project</p>
          <p>Accessibility</p>
          <p>Contact</p>
        </div>
      </header>

      <section>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/accessibility" component={Accessibility} />
          <Route path="/contact" component={Contact} />

          {redirect}
        </BrowserRouter>
        <button onClick={resetTranscript}>
          Réinitialiser la transcription
        </button>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
