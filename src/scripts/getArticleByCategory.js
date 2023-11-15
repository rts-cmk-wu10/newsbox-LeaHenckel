export default async function getArticlesByCategory(category) {
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=5wvcdhjF5kUl65LmgFDY5hOcZhMCASYG`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.results.forEach((element) => {
        console.log(element);
        if (element.item_type !== "Article") return; // removes promos from the New York Times
        const LI = document.createElement("li");
        LI.classList.add("article__box"); // gives the LI's a classname so they can be styled inside '_articleStyling.scss'
        const UL = document.querySelector(`.list__items--${category}`);
        LI.innerHTML = `
            <img src="${element.multimedia[0].url}" class="article__image">
            <h2>
                ${element.title}
            </h2>
            <p>
            ${element.abstract}
            </p>
            `;
        UL.append(LI);
      });
    });
}
