import React from "react";

// Import Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="homepage-wrapper">
        <h1>HANDS OFF</h1>
        <div>Naviguer uniquement avec la voix.</div>
      </div>
      <div className="links-wrapper centered-links">
        <div>
          <h4 className="active-page">Accueil</h4>
          <p>Vous êtes présentement sur cette page.</p>
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
          <h4>Contact</h4>
          <p>Dites 'ouvrir contact'</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
