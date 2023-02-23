import { SeasonFill } from "../Season/season";
function Click() {
  let cards = document.getElementsByClassName("App");
  let CardLenth = cards.length;

  for (let i = 0; i < CardLenth; i++) {
    cards[i].onclick = () => {
      
      document.getElementById("dot-wave").style.display = "block";
      document.getElementById("root").style.display = "none";
      document.getElementById("identify").innerText = i;

      SeasonFill();
    };
  }
}

export default Click;
