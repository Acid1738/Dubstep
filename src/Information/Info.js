import { AddSeason, RemoveSeason } from "../Season/season";
import { Delete } from "./InfoBack";
import { GoBack } from "./InfoBack";
import { LastEP } from "./InfoBack";
import { TotalEP } from "./InfoBack";
import "./info.css";


function ShowControl() {
  document.getElementById("SeasonControl").style.display = "block";
}

function HideControl() {
  document.getElementById("SeasonControl").style.display = "none";
}

function Back() {
  return (
    <>
      <button onClick={GoBack}>⮄</button>
      <button id="delete" onClick={Delete}>Delete</button>
      <section id="top">
        <img id="poster" alt="poster for anime" />
        <p id="plot"></p>
      </section>
      <section id="info">
        Airing: <span id="status"></span> <br></br>
        Studio: <span id="studio"></span> <br></br>
        Score: <span id="score"></span> <br></br>
        Length: <span id="duration"></span> <br></br> <br/>
      </section>
      
      <div id="SeasonControl">
        <button onClick={AddSeason}>+ Season</button>
        <button id="Remove" onClick={RemoveSeason}>- season</button>
         <br/> <br/>
        <input id="lastep" type="number" placeholder="Number of Episodes In Season"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={LastEP}>Save</button> 
        <br/> <br/>
        <input id="currep" type="number" placeholder="Last Watched Episode"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={TotalEP}>Save</button>
        <br/> <br/>
        <button id="close" onClick={HideControl}>Close</button>
      </div>
    </>
  );
}

export {Back , ShowControl};
