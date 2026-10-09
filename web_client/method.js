function rmnavwidget() {
  document
    .querySelectorAll("#navigation-button-up, #navigation-button-down")
    .forEach((button) => {
      button.style.setProperty("display", "none", "important");
    });
}
if (location.href.includes("youtube.com/shorts/") == true) {
  rmnavwidget();
  const observer = new MutationObserver(rmnavwidget);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.code === "Space"
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    {
      capture: true,
      passive: false,
    },
  );
  document.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
    },
    {
      capture: true,
      passive: false,
    },
  );
} else {
  document.removeEventListener();
}
