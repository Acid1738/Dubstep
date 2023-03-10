
document.getElementById("episode").innerText = localStorage.getItem("NumberOfEpisodesWatched");
document.getElementById("season").innerText = localStorage.getItem("CompletedSeasons");
document.getElementById("anime").innerText = localStorage.getItem("CompletedAnime");
document.getElementById("timespan").innerText = localStorage.getItem("TimeStamp");

setTimeout(Stats, 100);
function Stats() {
  //varaibles
  let spine;
  let SEASON;
  let season;
  let WATCH;
  let watch;
  let TOTAL;
  let total;
  let TotalSeason = 0;
  let WatchedEpisodes = 0;
  let TotalEpisodes = 0;
  let CompletedSeason = 0;
  let information;
  let time;
  let duration;
  let AnimeTime;
  let TotalTime;
  let seasonL = 0;
  let CompletedAnime = 0;
  let spineL;

  //get all anime
  spine = JSON.parse(localStorage.getItem("Spine"));
  spineL = spine.length;
  for (let i = 0; i < spine.length; i++) {
    //episode legth
    information = JSON.parse(localStorage.getItem("Information"));
    duration = information[i].info.duration;
    igama = information[i].info.title;
    time = duration.slice(0, 2);

    //SEASON
    SEASON = "Season" + spine[i];
    season = JSON.parse(localStorage.getItem(SEASON));
    seasonL = season.length;
   
    //for each :
    TotalSeason += Number(season.length);
    let seasonCom = 0;
    for (let j = 0; j < season.length; j++) {
      let l = j + 1;
      //get number of season

      //episode curruntly on
      WATCH = "ID" + spine[i] + "S" + l + "CE";
      watch = localStorage.getItem(WATCH);

      WatchedEpisodes += Number(watch);
      WatchTime = watch * Number(time);

      //totL EPISODE IN SEASON
      TOTAL = "ID" + spine[i] + "S" + l + "LE";
      total = localStorage.getItem(TOTAL);

      TotalEpisodes += Number(total);
      TotalTime = total * time;

      //for each:
      //get number of completed seasons
      if (watch === total) {
        CompletedSeason += 1;
        seasonCom += 1;
      }

      //check if anime is completed

      if (seasonL === seasonCom) {
        CompletedAnime += 1;
      }
    }
  }
  // how many episodes have been watched %
  let EpisodeCompletion = ((WatchedEpisodes / TotalEpisodes) * 100).toFixed(2);
  localStorage.setItem("EpisodeCompletion" , EpisodeCompletion );
  localStorage.setItem("NumberOfEpisode", TotalEpisodes);
  localStorage.setItem("NumberOfEpisodesWatched", WatchedEpisodes);

  //how many seasons have been watched
  let SeasonCompletion = ((CompletedSeason / TotalSeason) * 100).toFixed(2);
  localStorage.setItem("SeasonCompletion" , SeasonCompletion );
  localStorage.setItem("NumberOfSeason", TotalSeason);
  localStorage.setItem("CompletedSeasons", CompletedSeason);

  //how many anime have been completed
  localStorage.setItem("CompletedAnime", CompletedAnime);
  let AnimeCompletion = ((CompletedAnime / spineL) * 100).toFixed(2);
  localStorage.setItem("AnimeCompletion" , AnimeCompletion);
  localStorage.setItem("NumberOfAnime", spineL);

  
  localStorage.setItem("TotalTimeWatched", WatchTime);

  let sec = Number(WatchTime * 60);

  let month = Math.floor(sec / 2592000);
  let Remmonth = sec % 2592000;

  let day = Math.floor(Remmonth / 86400);
  let Remday = Remmonth % 86400;

  let hour = Math.floor(Remday / 3600);
  let Remhour = Remday % 3600;

  let minute = Math.floor(Remhour / 60);

  let timestamp =
    month +
    " months  " +
    day +
    " days  " +
    hour +
    " hours  " +
    minute +
    " minutes and " ;
   localStorage.setItem("TimeStamp", timestamp);
}
