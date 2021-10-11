import React, { useState } from "react";

// Import Pages
import Home from "./Home";
import Project from "./Project";
import Accessibility from "./Accessibility";
import Contact from "./Contact";

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

  const pages = ["accueil", "le projet", "accessibilité", "contact"];
  const urls = {
    accueil: "/",
    "le projet": "/project",
    accessibilité: "/accessibility",
    contact: "/contact",
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
    SpeechRecognition.startListening({ continuous: true, language: "fr-CA" });
  } else {
    <button
      onClick={SpeechRecognition.startListening({
        language: "fr-CA",
      })}
    >
      Commencer
    </button>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div id="links">
          <p>Accueil</p>
          <p>Le projet</p>
          <p>Accessibilité</p>
          <p>Contact</p>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/contact" component={Contact} />

        {redirect}
      </BrowserRouter>

      <p id="transcript">Transcription: {transcript}</p>

      <button onClick={resetTranscript}>Réinitialiser la transcription</button>
    </div>
  );
}

export default App;
