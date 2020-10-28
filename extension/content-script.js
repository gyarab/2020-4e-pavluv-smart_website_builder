//states
let picking = false;
let prevElement = null;
let curElement = null;

//check for action
browser.storage.onChanged.addListener((changes, area) => {
  if (area == "local" && "picking" in changes) {
    changes.picking.newValue ? start() : stop();
  }
});

//prepare and listen
function start() {
  if (!picking) {
    picking = true;
    document.body.style.filter = "grayscale(0.5)";
    document.addEventListener("mousemove", callback);
    document.addEventListener("click", copy);
  }
}

//clear all
function stop() {
  picking = false;
  document.body.style.removeProperty("filter");
  removeBorder(curElement);
  removeBorder(prevElement);
  document.removeEventListener("mousemove", callback);
  document.removeEventListener("click", copy);
}

//handle every mouse move
function callback() {
  let list = document.querySelectorAll(":hover");
  curElement = list[list.length - 1];
  addBorder(curElement);
  if (!same(curElement, prevElement)) {
    removeBorder(prevElement);
  }
  prevElement = curElement;
}

//adds a border to an element
function addBorder(element) {
  element.style.border = "2px dashed #F76300";
}

//removes a border to an element
function removeBorder(element) {
  element.style.removeProperty("border");
}

//checks if elements are equal depending on their position
function same(el1, el2) {
  if (el1 && el2) {
    let first = el1.getBoundingClientRect();
    let second = el2.getBoundingClientRect();
    let state = first.top === second.top && first.left === second.left;
    console.log(state);
    return state;
  }
  return true;
}

//handle copying element to clipboard
function copy(e) {
  copyToClipboard(curElement.outerHTML);
  stop();
}

function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
