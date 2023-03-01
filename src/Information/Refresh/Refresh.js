//function that calls the characters for that season beacuse it didnt get called the first time (maybe)
function Fix() {
  let position = document.getElementById("identify").innerText;
  let Information = JSON.parse(localStorage.getItem("Information"));
  let ID = Information[position].info.id;
  let link = "https://api.jikan.moe/v4/anime/" + ID;
  let CharLink = link + "/characters";

  fetch(CharLink)
    .then((res) => res.json())
    .then((CharacterData) => SaveChar(CharacterData));

  function SaveChar(CharacterData) {
    let CharData = CharacterData;

    let FilteredCharData = [];

    for (let i = 0; i < 10; i++) {
      if (CharData.data[i].role === "Main") {
        let info = {};
        info.name = CharData.data[i].character.name;
        info.image = CharData.data[i].character.images.jpg.image_url;
        FilteredCharData.push(info);
      }
    }
    console.log(FilteredCharData);
    let Characters = JSON.parse(localStorage.getItem("Characters"));
    Characters.splice(position, 0, FilteredCharData);

    localStorage.setItem("Characters", JSON.stringify(Characters));
  }
}

export default Fix;
