var countryData = fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags",
  {
    method: "GET",
  }
);

// Promise Chaining
countryData
  .then(function (data) {
    return data.json();
  })
  .then(function (countries) {
    for (let index = 0; index < countries.length; index++) {
      var div = document.createElement("div");
      div.innerText = countries[index].name.common;

      var img = document.createElement("img");
      img.setAttribute("src", countries[index].flags.png);
      img.setAttribute("width", 25);
      img.setAttribute("height", 15);
      div.appendChild(img);
      document.body.appendChild(div);
    }
  })
  .catch(function (error) {
    console.log(error);
  });