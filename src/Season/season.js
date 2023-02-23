import { CharactersBack } from "../Characters/Character";
import { stem } from "..";
import Back from "../Information/Info";
import { InfoBack } from "../Information/InfoBack";
import "./character.css";
import "./season.css";

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

function SeasonInfo() {
  //This basicall fins the array that has data for the season
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
  //This basicall fins the array that has data for the season
  let position = document.getElementById("identify").innerText;

  let Information = JSON.parse(localStorage.getItem("Information"));

  let ID = Information[position].info.id;

  let StorageSeason = "Season" + ID;
  let season = JSON.parse(localStorage.getItem(StorageSeason));
  let SeasonLentth = season.length;

  let Characters = JSON.parse(localStorage.getItem("Characters"));
  let Char = Characters[position];
  let lenth = Char.length;

  stem.render(
    <>
      <Back />
      {Array(lenth).fill(<Leech />)}
      {Array(SeasonLentth).fill(<Season />)}
    </>
  );

  setTimeout(() => { //ADD INFO FOR EACH seasson
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
  
      let tree = localStorage.getItem(current);
      for (let z = 0; z < tree; z++) {
        blend[j].innerText += "🟩";
      }
    }
    
  }, 1000);
  let SeaNum = document.getElementsByClassName("seasonnum");
  let CENum = document.getElementsByClassName("currep");
  let LENum = document.getElementsByClassName("numep");
  let blend = document.getElementsByClassName("Inner");

  

  setTimeout(InfoBack, 800);
  setTimeout(CharactersBack, 800);
}

export { AddSeason, RemoveSeason, SeasonFill, SeasonInfo };
