import { TITLE } from "..";

let naam;
let app;
let NAAM;

function Search() {
  naam = document.getElementsByClassName("title");
  app = document.getElementsByClassName("App");

  for (let i = 0; i < naam.length; i++) {
    NAAM = naam[i].innerText.toUpperCase();

    if (NAAM.indexOf(TITLE) == -1) {
      app[i].style.display = "none";

    } else {
        app[i].style.display = "block";
    }

  }
}

export default Search;
