import { headerScroll, sectionScroll } from "./modules/header.js";
import { themeMod } from "./modules/thema.js";

document.addEventListener('DOMContentLoaded', () => {
    headerScroll();
    sectionScroll();
    themeMod();
})