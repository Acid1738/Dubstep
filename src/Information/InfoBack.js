import { SeasonFill } from "../Season/season";

function InfoBack() {
  let ID = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  document.getElementById("poster").src = Information[ID].info.image;
  document.getElementById("plot").innerText = Information[ID].info.synopsis;
  document.getElementById("status").innerText = Information[ID].info.status;
  document.getElementById("studio").innerText = Information[ID].info.studio;
  document.getElementById("score").innerText = Information[ID].info.score;
  document.getElementById("duration").innerText = Information[ID].info.duration;
}

function Delete() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let Characters = JSON.parse(localStorage.getItem("Characters"));
  let Spine = JSON.parse(localStorage.getItem("Spine"));

  Information.splice(position, 1);
  Characters.splice(position, 1);
  Spine.splice(position, 1);

  localStorage.setItem("Information", JSON.stringify(Information));
  localStorage.setItem("Characters", JSON.stringify(Characters));
  localStorage.setItem("Spine", JSON.stringify(Spine));
  window.location.reload();
}

function GoBack() {
  let xheese = window.screen.width;
  document.getElementById("stem").style.display = "none";
  document.getElementById("three").style.display = "none";
  if (xheese < 600 ) {
    document.getElementById("root").style.display = "block";
  } else {
    document.getElementById("root").style.display = "flex";
  }
  
}

//update information on last watched episode
function LastEP() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;
  let StorageSeason = "Season" + ID;
  let season = JSON.parse(localStorage.getItem(StorageSeason));
  let last_ep = document.getElementById("lastep").value;
  let anime = "ID" + ID;
  let ThisSeason = `S${season.length}`;
  let lastest_ep = anime + ThisSeason + "LE";
  localStorage.setItem(lastest_ep, last_ep);
  SeasonFill();
}

//update information on total number of episodes in season
function TotalEP() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;
  let StorageSeason = "Season" + ID;
  let season = JSON.parse(localStorage.getItem(StorageSeason));
  let curr_ep = document.getElementById("currep").value;
  let anime = "ID" + ID;
  let ThisSeason = `S${season.length}`;
  let current_ep = anime + ThisSeason + "CE";
  localStorage.setItem(current_ep, curr_ep);
  SeasonFill();
}

export { InfoBack, Delete, GoBack, LastEP, TotalEP };
