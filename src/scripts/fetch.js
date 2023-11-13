// WORLD FETCH
fetch(
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5wvcdhjF5kUl65LmgFDY5hOcZhMCASYG"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.results[0]);
    data.results.forEach((element) => {
      const LI = document.createElement("li");
      const UL = document.querySelector(".world_list");
      LI.innerHTML = `
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

// SPORT FETCH
fetch("");
