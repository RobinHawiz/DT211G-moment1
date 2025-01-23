import "./style/style.scss";

var path = window.location.pathname;
var page = path.split("/").pop();

if (page === "pappaskamt") {
  const button = document.querySelector(".generate-joke");

  button.addEventListener("click", () => {
    import("./js/generateJoke.js").then(async ({ generateJoke }) => {
      const paragraphJoke = document.querySelector(".joke");
      paragraphJoke.innerHTML = await generateJoke();
    });
  });
}
