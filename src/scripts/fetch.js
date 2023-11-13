fetch(
  "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=5wvcdhjF5kUl65LmgFDY5hOcZhMCASYG"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.results[0]);
    data.results.forEach((element) => {
      const LI = document.querySelector(".headLine_article");
      LI.innerHTML = `
        <h2>
            ${element.title}
        </h2>
        <p>
            ${element.abstract}
        </p>
      `;
    });
  });
