import { CharactersBack } from "../Characters/Character";
import { stem } from "..";
import Back from "../Information/Info";
import { InfoBack } from "../Information/InfoBack";
import "./character.css";
import "./season.css";
import Fix from "../Information/Refresh/Refresh";

//Adds a new season in an anime
function AddSeason() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;
  let season = "Season" + ID;
  let SeasonA = JSON.parse(localStorage.getItem(season));
  SeasonA.push("1");
  localStorage.setItem(season, JSON.stringify(SeasonA));
  SeasonFill();
}

//Removes the last season in an anime
function RemoveSeason() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;
  let season = "Season" + ID;
  let SeasonA = JSON.parse(localStorage.getItem(season));
  SeasonA.pop();
  localStorage.setItem(season, JSON.stringify(SeasonA));
  SeasonFill();
}

//the html for the characters
function Leech() {
  return (
    <>
      <div className="people">
        <img className="potrait" />
        <p className="name"></p>
      </div>
    </>
  );
}

//creates a the first season when you add an anime
function SeasonInfo() {
  //This basicall finds the array that has data for the season
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;

  let StorageSeason = "Season" + ID;
  let season = JSON.parse(localStorage.getItem(StorageSeason));

  //this creates a unique name for the season
  let last_ep = document.getElementById("lastep").value;
  let curr_ep = document.getElementById("currep").value;
  let anime = "ID" + ID;
  let ThisSeason = `S${season.length}`;
  let current_ep = anime + ThisSeason + "CE";
  let lastest_ep = anime + ThisSeason + "LE";

  //This save the data for the current and last episode for the last season
  //that was put in
  localStorage.setItem(current_ep, curr_ep);
  localStorage.setItem(lastest_ep, last_ep);
}

//html for the season elements
function Season() {
  return (
    <>
      <div className="season">
        <div className="season-info">
          <h3>
            Season <span className="seasonnum"></span>
          </h3>
          <span className="Inner"></span> &nbsp;&nbsp;
          <span className="currep"> </span>/<span className="numep"></span>
        </div>
      </div>
    </>
  );
}

function SeasonFill() {
  //This finds the id  for the anime
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;

  //how many seasons to print
  let StorageSeason = "Season" + ID;
  let season = JSON.parse(localStorage.getItem(StorageSeason));
  let SeasonLentth = season.length;

  //how many characters to print
  let Characters = JSON.parse(localStorage.getItem("Characters"));
    if (Characters == "" ) {
     Fix()
  }
  let Char = Characters[position];
  let lenth = Char.length;

  //render the stuff
  stem.render(
    <>
      <Back />
      {Array(lenth).fill(<Leech />)}
      {Array(SeasonLentth).fill(<Season />)}
    </>
  );

  let SeaNum = document.getElementsByClassName("seasonnum");
  let CENum = document.getElementsByClassName("currep");
  let LENum = document.getElementsByClassName("numep");
  let blend = document.getElementsByClassName("Inner");

  setTimeout(() => {
    //ADD INFO FOR EACH seasson
    for (let j = 0; j <= SeasonLentth; j++) {
      SeaNum[j].innerText = j + 1;
      let l = j + 1;
      blend[j].innerText = "";
      //current episode
      let current = "ID" + ID + "S" + l + "CE";
      CENum[j].innerText = localStorage.getItem(current);

      //last watched episode
      let latest = "ID" + ID + "S" + l + "LE";
      LENum[j].innerText = localStorage.getItem(latest);

      // indicate how many episodes you have you watched
      let tree = localStorage.getItem(current);
      for (let z = 0; z < tree; z++) {
        blend[j].innerText += "🟩";
      }

      let screw = localStorage.getItem(latest) - localStorage.getItem(current);
      for (let a  = 0 ; a < screw ; a++) {
        blend[j].innerText += "🟥";
      }
    }
  }, 1000);

  setTimeout(InfoBack, 800);
  setTimeout(CharactersBack, 800);
}

export { AddSeason, RemoveSeason, SeasonFill, SeasonInfo };
