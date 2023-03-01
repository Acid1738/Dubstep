import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Front/card";
import CardBack from "./Front/CardBack";
import Click from "./Front/Click";
import AddNew from "./Fetch/fetch";
import Search from "./Front/search";

//check weather user is visitng for the first time
//if yes create the storage values
let check = JSON.parse(localStorage.getItem("Spine"));
if (check === null) {
  console.log("eyeshot");
  localStorage.setItem("Spine", "[]");
  localStorage.setItem("Information", "[]");
  localStorage.setItem("Characters", "[]");
}

//add a new anime
document.getElementById("SaveAnime").addEventListener("click", AddNew);
let bro = document.getElementById("input");
bro.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    AddNew();
  }
});

//this adds the information to each of the anime cards
let Spine = JSON.parse(localStorage.getItem("Spine"));
let SpineLength = Spine.length;
setTimeout(CardBack, 600);

const stem = ReactDOM.createRoot(document.getElementById("stem"));
const char = ReactDOM.createRoot(document.getElementById("Characters"));
const seao = ReactDOM.createRoot(document.getElementById("Season"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>{Array(SpineLength).fill(<Card />)}</>);

setTimeout(Click, 1000);

//a search function
let title;
let TITLE;
document.getElementById("searchInput").addEventListener("keyup", () => {
  title = document.getElementById("searchInput").value;
  TITLE = title.toUpperCase();
  console.log(TITLE);
  Search();
});

export { stem, char, seao, TITLE };
