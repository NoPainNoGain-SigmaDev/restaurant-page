//DOM manipulation functions used through modules
function createEl(tag, props = {}, children = []) {
  const el = Object.assign(document.createElement(tag), props);
  children.forEach(child => el.appendChild(child));
  return el;
}
function appendElement(element) {
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(element);
}
function clearDOM() {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
}

export { createEl, appendElement, clearDOM };
