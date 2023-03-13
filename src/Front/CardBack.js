
function CardBack() {
  let Information = JSON.parse(localStorage.getItem("Information"));
  let poster = document.getElementsByClassName("poster");
  let title = document.getElementsByClassName("title");
  for (let i = 0; i < Information.length; i++) {
    title[i].innerText = Information[i].info.title;
    poster[i].src = Information[i].info.image;
  }
}

export default CardBack;
