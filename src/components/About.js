import React from "react";

// Import Media
import project from "../medias/project.png";

function About() {
  return (
    <>
      <div className="page-wrapper">
        <div class="left-column">
          <p>
            Il y a plus d'un demi-siècle maintenant, le premier prototype
            d’ordinateur personnel est apparu, c’est-à-dire le modèle avec
            souris et clavier qui est aujourd’hui un indispensable générationnel
            dans notre vie de tous les jours. Avec le temps, la technologie
            avance démesurément vite, et sans voir ce dernier passer, peut-être
            que ces accessoires d’ordinateur seront considérées dans quelques
            années comme des anciennes machines. Pour se préparer à un tel
            changement, le Web va devoir s’adapter en conséquence. C’est d’où
            vient l’idée de lancer le projet Hands Off: un site Web qui se
            distingue du modèle conventionnel. On peut dire adieu au clavier et
            à la souris - il est entièrement navigable par la voix. Pas besoin
            de défiler, de cliquer, ou de taper. La page s’affiche à la hauteur
            et à la longueur de l’écran et les hyperliens sont accessibles grâce
            à des raccourcis de reconnaissance vocale. Hands Off est un plan,
            une base, mais surtout, un test pour savoir si nous aurons besoin du
            clavier et de la souris d’ordinateur ou non pour surfer sur le Web
            du futur.
          </p>
        </div>
        <div class="right-column">
          <img src={project} alt="Woman using the Hands Off software" />
          <h2>
            HANDS OFF, <br />
            C’EST QUOI?
          </h2>
        </div>
      </div>
      <div className="links-wrapper left-links">
        <div>
          <h4>Home</h4>
          <p>Say 'go to home’ or ‘page 1’</p>
        </div>
        <div>
          <h4 class="active-page">About</h4>
          <p>You are currently on this page.</p>
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

export default About;
