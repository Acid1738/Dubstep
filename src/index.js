import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Front/card";
import CardBack from "./Front/CardBack";
import Click from "./Front/Click";
import WeGood from "./Fetch/fetch";
import Search from "./Front/search";
import { ShowControl } from "./Information/Info";
import Fix from "./Information/Refresh/Refresh";


//check weather user is visitng for the first time
//if yes create the storage values
let check = JSON.parse(localStorage.getItem("Spine"));
if (check === null) {

  localStorage.setItem("Spine", "[]");
  localStorage.setItem("Information", "[]");
  localStorage.setItem("Characters", "[]");
}

//add a new anime
document.getElementById("SaveAnime").addEventListener("click", WeGood);
let bro = document.getElementById("input");
bro.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    WeGood();
  }
});

//this adds the information to each of the anime cards
let Spine = JSON.parse(localStorage.getItem("Spine"));
let SpineLength = Spine.length;
setTimeout(CardBack, 600);

const stem = ReactDOM.createRoot(document.getElementById("stem"));
const char = ReactDOM.createRoot(document.getElementById("Characters"));
const seao = ReactDOM.createRoot(document.getElementById("Season"));
const inform = ReactDOM.createRoot(document.getElementById("Inform"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>{Array(SpineLength).fill(<Card />)}</>);

setTimeout(Click, 1000);

//a search function
let title;
let TITLE;
document.getElementById("searchInput").addEventListener("keyup", () => {
  title = document.getElementById("searchInput").value;
  TITLE = title.toUpperCase();
  Search();
});


///three dot button
document.getElementById("three").addEventListener("click" , ShowControl);

let count = 0;
//three line buttom
document.getElementById("menu").addEventListener("click" , () => {
 count += 1;
 if (count === 1) {
  document.getElementById("ytea").style.display = "block";
 }

 if (count === 2 ) {
  document.getElementById("ytea").style.display = "none";
  count = 0 ;
 }

});

//fixx character not being fetched
document.getElementById("Fix").addEventListener("click", Fix);


export { stem, char, seao, TITLE, inform };
