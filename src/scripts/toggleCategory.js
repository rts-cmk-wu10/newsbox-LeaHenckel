export default (function () {
  if (!window.location.pathname.includes("settings.html")) return; // guard clause

  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  // Retrieve existing data from local storage
  const existingData = getJSONfromLocalStorage("checkboxData");

  // Initialize checkboxes on the settings page by setting its checked state based on whether there is a saved state for its category in the existingData retrieved from local storage.
  // If there is no saved state, the default is set to true. It also adds an event listener to each checkbox to respond to changes, ensuring that the toggleHandler function is called when a user interacts with the checkbox.
  checkboxes.forEach(function (element) {
    const category = element.dataset.category;
    element.checked =
      existingData[category] !== undefined ? existingData[category] : true;
    element.addEventListener("change", toggleHandler);
  });

  function toggleHandler(event) {
    const isChecked = event.currentTarget.checked;
    const category = event.currentTarget.dataset.category;

    // Save data to local storage
    saveToLocalStorage(category, isChecked);
  }

  function saveToLocalStorage(key, value) {
    // Retrieve existing data from local storage
    const existingData = getJSONfromLocalStorage("checkboxData");

    // Update or add the new data
    existingData[key] = value;

    // Save the updated data back to local storage
    localStorage.setItem("checkboxData", JSON.stringify(existingData));
  }

  // Retrieves and parses JSON data stored in the local storage of a web browser.
  function getJSONfromLocalStorage(key) {
    const OBJECT = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
    return OBJECT;
  }
})();
