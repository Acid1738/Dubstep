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
  let position = document.getElementById("identify").innerText;
  let Characters = JSON.parse(localStorage.getItem("Characters"));
  let Char = Characters[position];
  let lenth = Char.length;
  let image = document.getElementsByClassName("potrait");
  let chara = document.getElementsByClassName("name");

  for (let i = 0; i < lenth; i++) {
    image[i].src = Char[i].image;
    chara[i].innerText = Char[i].name;
  }
}

export { Characters, CharactersBack };

