let btn = document.querySelector("button");

//on extension click
browser.storage.local.set({ picking: false });

btn.addEventListener("click", () => {
  browser.storage.local.set({ picking: true });
});
