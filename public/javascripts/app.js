import { Accordion } from "./accordion.js";
import { accordionData } from "./accordionData.js";

const accordionEl = document.getElementById("accordion");

//declare new Accordion
const accordion = new Accordion(accordionEl, accordionData);

//initialise the accordion
accordion.init();
