let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var browser = browser || chrome;
  browser.tabs.executeScript({
    file: "copier.js",
  });
});
