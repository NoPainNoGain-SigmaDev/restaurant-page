//load home module
import "../styles/home.css";
import { createEl, appendElement } from "./dom-control.js";

export function loadHome() {
  const homeContent = createEl("div", { className: "main-container" }, [
    createEl("div", { className: "side-img" }),
    createEl("div", { className: "main-content" }, [
      createEl("div", {}, [
        createEl("h3", { textContent: "DELICIOUS DUNGEON" }),
        createEl("h3", { textContent: "DELIGHTS" }),
      ]),
      createEl("p", {
        textContent:
          "Descend. Hunt. Feast. In Delicious in Dungeons, every meal is an adventure. Brave your hunger, slay monsters, and taste recipes born in the deepest dark. Join us and dine like a true dungeon explorer!",
      }),
      createEl("button", { className: "order", textContent: "ORDER NOW" }),
    ]),
  ]);

  appendElement(homeContent);
}
