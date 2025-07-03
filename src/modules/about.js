// load about us module
import "../styles/about.css";
import { createEl, appendElement } from "./dom-control.js";

export function loadAbout(){
    const textBeforeAnchor = document.createTextNode("Welcome to Dungeon Delights, where monsters are the main course and your survival depends on your appetite. Inspired by the Netflix animated series ");
    const anchor = createEl("a", {
        href: "https://www.netflix.com/us-es/title/81564899",
        target: "_blank",
        textContent: "Delicious in Dungeon",
    });
    const textAfterAnchor = document.createTextNode(", we believe the best meals are hunted, grilled, and occasionally still wriggling. Whether you’re a seasoned adventurer or just here for the snacks, we promise dishes so good they’ll make you forget the danger (and possibly your teammates). Bon appétit, brave explorer!");
    const aboutParagraph = createEl("p", {className: "about-paragraph"});
    aboutParagraph.append(textBeforeAnchor, anchor, textAfterAnchor); 



    const aboutContent = createEl("div", { className: "about-container"}, [
        createEl("img", {
            src: "https://preview.redd.it/all-dungeon-monster-dishes-in-delicious-in-dungeon-anime-v0-000unl7pjk6f1.jpeg?width=640&crop=smart&auto=webp&s=f48b2dac7113d1579739879ef92af18e95392a22",
            alt: "Guy eating parasite worm",
            className: "about-image",
        }),
        aboutParagraph,
    ]);
    appendElement(aboutContent);
};