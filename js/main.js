// iskvieti funkcija
import { renderSocials } from './komponentai/renderSocials.js';
// paimti duomenis
import { socialsData } from './duomenys/socialsData.js';
//funkcijai perduoti duomenis
// renderSocials(socialsData);


// universaliau butu daryti funkcija (selektorius, duomenys):
// pvz., renderSocials('footer > .social', socialsData);
// tada reiketu papildomu validaciju selektoriui

renderSocials('footer > .social', socialsData);

