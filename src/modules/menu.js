//load menu module
import "../styles/menu.css";
import { createEl, appendElement } from "./dom-control.js";

export function loadMenu() {
  const menuItems = [
    {
      name: "Classic Scorpion Hot Pot",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h01-1.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Feast Of Plundered Comfort Food",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h02.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Mimic Meat Breakfast",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h03.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Adventurous Bite Of A Monstrous Parasite",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h04-1.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Savory Stew To Prepare For Battle",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h05-1.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "On-The-Go Snack For Hungry Adventurers",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h06-1.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Surprisingly Dangerous Quiche",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h07.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Heart-Warming Stone-Baked Meal",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h08.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Oily Historic Feast",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h09.jpg?q=70&fit=crop&w=825&dpr=1",
    },
    {
      name: "Motivational Breaded Frog Cutlet",
      imgPath:
        "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/dm_delicious-dishes_h10.jpg?q=70&fit=crop&w=825&dpr=1",
    },
  ];
  const createMenuCard = (name, urlPath) => {
    return createEl("div", { className: "menu-item-card" }, [
      createEl("img", {
        className: "menu-item-img",
        src: urlPath,
        alt: `Image of ${name}`,
      }),
      createEl("h4", { className: "menu-item-name", textContent: name }),
    ]);
  };

  const menuItemCards = [];
  menuItems.forEach(({ name, imgPath }) =>
    menuItemCards.push(createMenuCard(name, imgPath))
  );

  const menuContent = [
    createEl("div", { className: "menu-container" }, [
      createEl("h1", {
        className: "title",
        id: "menu-title",
        textContent: "MENU",
      }),
      createEl(
        "div",
        {
          className: "menu-items-container",
        },
        menuItemCards
      ),
    ]),
  ];

  menuContent.forEach((element) => appendElement(element));
}
