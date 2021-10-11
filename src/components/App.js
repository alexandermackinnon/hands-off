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
  return <div className="app">BIENVENUE.</div>;
}

export default App;
