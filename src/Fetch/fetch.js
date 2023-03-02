function WeGood() {
  let ID = document.getElementById("input").value;
  let link = "https://api.jikan.moe/v4/anime/" + ID;

  let status;

  fetch(link).then((res) => {
    status = res.status;
  });

  setTimeout(() => {}, 500);
  if (status === 200) {
    AddNew();
  }
}

function AddNew() {
  let ID = document.getElementById("input").value;
  let link = "https://api.jikan.moe/v4/anime/" + ID;

  
  fetch(link)
    .then((res) => res.json())
    .then((data) => Save(data));

  function Save(data) {
    //filter relavent info because respnse is to big
    //local storage has its limits

    let UnfilteredInfo = data;
    let info = {};
    let FilteredInfo = { info };
    FilteredInfo.info.title = UnfilteredInfo.data.title_english;
    FilteredInfo.info.status = UnfilteredInfo.data.status;
    FilteredInfo.info.studio = UnfilteredInfo.data.studios[0].name;
    FilteredInfo.info.synopsis = UnfilteredInfo.data.synopsis;
    FilteredInfo.info.score = UnfilteredInfo.data.score;
    FilteredInfo.info.duration = UnfilteredInfo.data.duration;
    FilteredInfo.info.image = UnfilteredInfo.data.images.jpg.image_url;
    FilteredInfo.info.id = UnfilteredInfo.data.mal_id;

    let Information = JSON.parse(localStorage.getItem("Information"));
    Information.unshift(FilteredInfo);
    localStorage.setItem("Information", JSON.stringify(Information));
  }

  let Spine = JSON.parse(localStorage.getItem("Spine"));
  Spine.unshift(ID);
  localStorage.setItem("Spine", JSON.stringify(Spine));

  let CharLink = link + "/characters";

  //Character
  fetch(CharLink)
    .then((res) => res.json())
    .then((CharacterData) => SaveChar(CharacterData));

  function SaveChar(CharacterData) {
    let CharData = CharacterData;
    console.log(CharData.data[0].character.name);

    let FilteredCharData = [];
    //filter characters because theres too many characters
    for (let i = 0; i < 12; i++) {
      if (CharData.data[i].role === "Main") {
        let info = {};
        info.name = CharData.data[i].character.name;
        info.image = CharData.data[i].character.images.jpg.image_url;
        FilteredCharData.push(info);
        console.log(FilteredCharData);
      }
    }
    let Characters = JSON.parse(localStorage.getItem("Characters"));
    Characters.unshift(FilteredCharData);

    localStorage.setItem("Characters", JSON.stringify(Characters));
  }

  let season = "Season" + ID;
  localStorage.setItem(season, '["1"]');

  setTimeout(() => {
    window.location.reload();
  }, 1100);
}

export default WeGood;
