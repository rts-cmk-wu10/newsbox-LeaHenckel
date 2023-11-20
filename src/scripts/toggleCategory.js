export default (function () {
  if (!window.location.pathname.includes("settings.html")) return; // guard clause

  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach(function (element) {
    element.addEventListener("change", toggleHandler);
  });

  function toggleHandler(event) {
    const isChecked = event.target.checked;
    const category = event.target.dataset.category;

    // Save data to local storage
    saveToLocalStorage(category, isChecked);
  }

  function saveToLocalStorage(key, value) {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("checkboxData")) || {};

    // Update or add the new data
    existingData[key] = value;

    // Save the updated data back to local storage
    localStorage.setItem("checkboxData", JSON.stringify(existingData));
  }
})();
