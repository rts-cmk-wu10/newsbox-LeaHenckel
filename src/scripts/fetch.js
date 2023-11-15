import getArticlesByCategory from "./getArticleByCategory";

// WORLD FETCH
const worldDropDown = document.querySelector(".article__headline--world");
const worldList = document.querySelector(".list__items--world");
let worldClickedOnce = false;

worldDropDown.addEventListener("click", () => {
  if (worldList.style.display === "none") {
    worldList.style.display = "block";
  } else {
    worldList.style.display = "none";
  }
  if (!worldClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    worldClickedOnce = true;
    getArticlesByCategory("world");
  }
});

// ARTS FETCH
const artsDropDown = document.querySelector(".article__headline--arts");
const artsList = document.querySelector(".list__items--arts");
let artClickedOnce = false;

artsDropDown.addEventListener("click", () => {
  if (artsList.style.display === "none") {
    artsList.style.display = "block";
  } else {
    artsList.style.display = "none";
  }
  if (!artClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    artClickedOnce = true;
    getArticlesByCategory("arts");
  }
});

// TRAVEL FETCH
const travelDropDown = document.querySelector(".article__headline--travel");
const travelList = document.querySelector(".list__items--travel");
let travelClickedOnce = false;

travelDropDown.addEventListener("click", () => {
  if (travelList.style.display === "none") {
    travelList.style.display = "block";
  } else {
    travelList.style.display = "none";
  }
  if (!travelClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    travelClickedOnce = true;
    getArticlesByCategory("travel");
  }
});

// SCIENCE FETCH
const scienceDropDown = document.querySelector(".article__headline--science");
const scienceList = document.querySelector(".list__items--science");
let scienceClickedOnce = false;

scienceDropDown.addEventListener("click", () => {
  if (scienceList.style.display === "none") {
    scienceList.style.display = "block";
  } else {
    scienceList.style.display = "none";
  }
  if (!scienceClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    scienceClickedOnce = true;
    getArticlesByCategory("science");
  }
});

// BUSINESS FETCH
const businessDropDown = document.querySelector(".article__headline--business");
const businessList = document.querySelector(".list__items--business");
let businessClickedOnce = false;

businessDropDown.addEventListener("click", () => {
  if (businessList.style.display === "none") {
    businessList.style.display = "block";
  } else {
    businessList.style.display = "none";
  }
  if (!businessClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    businessClickedOnce = true;
    getArticlesByCategory("business");
  }
});

// FOOD FETCH
const foodDropDown = document.querySelector(".article__headline--food");
const foodList = document.querySelector(".list__items--food");
let foodClickedOnce = false;

foodDropDown.addEventListener("click", () => {
  if (foodList.style.display === "none") {
    foodList.style.display = "block";
  } else {
    foodList.style.display = "none";
  }
  if (!foodClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    foodClickedOnce = true;
    getArticlesByCategory("food");
  }
});

// HEALTH FETCH
const healthDropDown = document.querySelector(".article__headline--health");
const healthList = document.querySelector(".list__items--health");
let healthClickedOnce = false;

healthDropDown.addEventListener("click", () => {
  if (healthList.style.display === "none") {
    healthList.style.display = "block";
  } else {
    healthList.style.display = "none";
  }
  if (!healthClickedOnce) {
    // Make the fetch request only if it hasn't been clicked before
    healthClickedOnce = true;
    getArticlesByCategory("health");
  }
});
