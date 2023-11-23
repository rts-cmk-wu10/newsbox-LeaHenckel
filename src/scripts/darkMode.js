export default (function () {
  const CTA_BUTTON = document.querySelector(".activate__darkMode--btn");

  // Check if the dark mode is enabled in the local storage and apply it
  if (localStorage.getItem("theme") === "darkmode") {
    enableDarkMode();
  }

  CTA_BUTTON.addEventListener("click", clickHandler);

  function clickHandler() {
    const CLASS_LIST = document.body.classList;
    CLASS_LIST.toggle("darkmode");

    // Update the theme in local storage based on the current state
    localStorage.setItem(
      "theme",
      CLASS_LIST.contains("darkmode") ? "darkmode" : ""
    );
  }

  function enableDarkMode() {
    const CLASS_LIST = document.body.classList;
    CLASS_LIST.add("darkmode");
  }

  // Check if the "theme" is set in the local storage, and if not, initialize it
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "");
  }
})();
