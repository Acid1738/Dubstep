function Characters() {
  return (
    <>
      <div className="people">
        <img className="potrait" alt="character potrait"/>
        <p className="name"></p>
      </div>
    </>
  );
}

function CharactersBack() {
  document.getElementById("lds-ellipsis").style.display = "none";
  document.getElementById("stem").style.display = "block";
  let position = document.getElementById("identify").innerText;
  let Characters = JSON.parse(localStorage.getItem("Characters"));
  let Char = Characters[position];
  let lenth = Char.length;
  let image = document.getElementsByClassName("potrait");
  let chara = document.getElementsByClassName("name");
  let Information = JSON.parse(localStorage.getItem("Information"));

  for (let i = 0; i < lenth; i++) {
    image[i].src = Char[i].image;
    chara[i].innerText = Char[i].name;
  }

  if (Information.length !== Characters.length){
    document.getElementById("Fix").style.display = "block";
   } else {
    document.getElementById("Fix").style.display = "none";
   }

}

export { Characters, CharactersBack };

