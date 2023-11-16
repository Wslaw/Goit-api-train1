//                    API
const city = document.querySelector(".city");
const day = document.querySelector(".day");
const btn = document.querySelector(".btn");
console.log(city);
console.log(day);
console.log(btn);

const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("404 not found!");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .then(() => console.log("Finish"))
  .catch((err) => console.log(`Fetch error: ${err}`));
