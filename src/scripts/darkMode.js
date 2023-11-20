export default (function () {
  if (!window.location.pathname.includes("settings.html")) return; // guarde clause

  const CTA_BUTTON = document.querySelector(".activate__darkMode--btn");

  CTA_BUTTON.addEventListener("click", clickHandler);

  function clickHandler() {
    document.body.classList.toggle("darkmode");
  }
})();
