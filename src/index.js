import "./styles/global.css";
import { clearDOM } from "./modules/dom-control";
import { loadHome } from "./modules/home";
import { loadMenu } from "./modules/menu";
import { loadAbout } from "./modules/about";

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const aboutButton = document.getElementById("about-btn");

loadHome();

homeButton.addEventListener("click", ()=>{
    clearDOM();
    loadHome();
});
menuButton.addEventListener("click", ()=>{
    clearDOM();
    loadMenu();
});
aboutButton.addEventListener("click", ()=>{
   clearDOM();
   loadAbout();
});
