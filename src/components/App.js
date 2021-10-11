import React, { useState } from "react";

// Import Pages
import Home from "./Home";
import Project from "./Project";
import Accessibility from "./Accessibility";
import Contact from "./Contact";

// Import React Router
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

// Import Speech Recognition
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="links">
          <Link to="/">Accueil</Link>
          <Link to="/project">Le projet</Link>
          <Link to="/accessibility">Accessibilité</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
