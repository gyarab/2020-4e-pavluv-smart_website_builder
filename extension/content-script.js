//states
let picking = false;
let prevElement = null;
let curElement = null;

//prepare and listen
function start() {
  if (!picking) {
    picking = true;
    document.body.style.filter = "grayscale(0.8)";
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
    return state;
  }
  return true;
}

//handle copying element to clipboard
function copy(e) {
  e.preventDefault();
  copyToClipboard(getHTML() + "\n" + getStyles());
  stop();
}
function getHTML() {
  return curElement.outerHTML;
}
function getStyles() {
  let styles = "<style>\n";

  styles += css(curElement) + "\n";
  var children = curElement.children;
  for (let i = 0; i < children.length; i++) {
    styles += css(children[i]) + "\n";
  }
  styles += "</style>";
  return styles;
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

//gets active style rules
function css(a) {
  let sheets = document.styleSheets,
    o = [];
  a.matches =
    a.matches ||
    a.webkitMatchesSelector ||
    a.mozMatchesSelector ||
    a.msMatchesSelector ||
    a.oMatchesSelector;

  for (var i in sheets) {
    var rules = sheets[i].rules || sheets[i].cssRules;
    for (var r in rules) {
      if (a.matches(rules[r].selectorText)) {
        o.push(rules[r].cssText);
      }
    }
  }
  return o.join("\n");
}
