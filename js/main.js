// iskvieti funkcija
import { renderSocials } from './komponentai/renderSocials.js';
// paimti duomenis
import { socialsData } from './duomenys/socialsData.js';
//funkcijai perduoti duomenis
// renderSocials(socialsData);

import { renderProgresJuosta } from './komponentai/renderProgressBars.js';
import { progressJuostosData } from './duomenys/progressJuostosData.js';


// universaliau butu daryti funkcija (selektorius, duomenys):
// pvz., renderSocials('footer > .social', socialsData);
// tada reiketu papildomu validaciju selektoriui

renderSocials('footer > .social', socialsData);

renderProgresJuosta('.kairysis-stulpelis', progressJuostosData);
// renderProgresJuosta('.kairysis-stulpelis', 50);
