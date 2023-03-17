import { SeasonFill } from "../Season/season";



function Click() {
  let cards = document.getElementsByClassName("App");
  let CardLenth = cards.length;

  for (let i = 0; i < CardLenth; i++) {
    cards[i].onclick = () => {
      
      document.getElementById("three").style.display = "block";
      document.getElementById("root").style.display = "none";
      document.getElementById("identify").innerText = i;
      document.getElementById("clout").style.display = "none";
      document.getElementById("topup").style.display = "none";
      document.getElementById("ytea").style.display = "none";
      document.getElementById("lds-ellipsis").style.display = "inline-block";
     
      SeasonFill();
    };
  }
}

export default Click;
