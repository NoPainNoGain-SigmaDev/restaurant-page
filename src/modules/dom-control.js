//DOM manipulation functions used through modules
function createElement(
  element,
  className = false,
  content = false,
  nest = false,
  multiple = false
) {
  if (nest) {
    if (multiple) {
      const newElement = document.createElement(`${element}`);
      if (className) newElement.classList.add(className);
      if (content) newElement.textContent = content;
      nest.forEach((el) => {
        appendElement(el, newElement);
      });
      return newElement;
    }

    const newElement = document.createElement(`${element}`);
    if (className) newElement.classList.add(className);
    if (content) newElement.textContent = content;
    return appendElement(nest, newElement);
  }

  const newElement = document.createElement(`${element}`);
  if (className) newElement.classList.add(className);
  if (content) newElement.textContent = content;
  return newElement;
}
function appendElement(element, target = false) {
  if (target) {
    target.appendChild(element);
    return target;
  }
  const contentContainer = document.getElementById("content");
  contentContainer.appendChild(element);
}
function clearDOM(){
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "";
};

export { createElement, appendElement, clearDOM};
