//load home module
import { createElement, appendElement } from "./dom-control.js";

export function loadHome() {
  const homeContent = createElement(
    "div",
    "main-container",
    false,
    [
      createElement("div", "side-img", false, false, false),
      createElement(
        "div",
        "main-content",
        false,
        [
          createElement(
            "div",
            false,
            false,
            [
              createElement("h3", false, "DELICIOUS DUNGEON", false, false),
              createElement("h3", false, "DELIGHTS", false, false),
            ],
            true
          ),
          createElement(
            "p",
            false,
            "Descend. Hunt. Feast. In Delicious in Dungeons, every meal is an adventure. Brave your hunger, slay monsters, and taste recipes born in the deepest dark. Join us and dine like a true dungeon explorer!",
            false,
            false
          ),
          createElement("button", "order", "ORDER NOW", false, false),
        ],
        true
      ),
    ],
    true
  );

  appendElement(homeContent);
}
