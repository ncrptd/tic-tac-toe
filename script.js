let container = document.querySelector(".container");
let pos = document.querySelectorAll("td > button");
let playerSpan = document.querySelector(".player");
let buttonContainer = document.querySelector(".game-container");
let winner = document.querySelector(".winner");
let restartBtn = document.querySelector(".restart");
let playerIndicator = document.querySelector(".player-indicator");
let player = "x";
let tieCount = 0;

function findWinner(e) {
  if (
    pos[0].innerText &&
    pos[0].innerText == pos[1].innerText &&
    pos[1].innerText == pos[2].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[0].style.color = "red";
    pos[1].style.color = "red";
    pos[2].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[0].innerText &&
    pos[0].innerText == pos[3].innerText &&
    pos[3].innerText == pos[6].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[0].style.color = "red";
    pos[3].style.color = "red";
    pos[6].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[0].innerText &&
    pos[0].innerText == pos[4].innerText &&
    pos[4].innerText == pos[8].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[0].style.color = "red";
    pos[4].style.color = "red";
    pos[8].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[3].innerText &&
    pos[3].innerText == pos[4].innerText &&
    pos[4].innerText == pos[5].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[3].style.color = "red";
    pos[4].style.color = "red";
    pos[5].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[6].innerText &&
    pos[6].innerText == pos[7].innerText &&
    pos[7].innerText == pos[8].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[6].style.color = "red";
    pos[7].style.color = "red";
    pos[8].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[6].innerText &&
    pos[6].innerText == pos[4].innerText &&
    pos[4].innerText == pos[2].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[6].style.color = "red";
    pos[4].style.color = "red";
    pos[2].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[1].innerText &&
    pos[1].innerText == pos[4].innerText &&
    pos[4].innerText == pos[7].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[1].style.color = "red";
    pos[4].style.color = "red";
    pos[7].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (
    pos[2].innerText &&
    pos[2].innerText == pos[5].innerText &&
    pos[5].innerText == pos[8].innerText
  ) {
    disableAllButtons();
    hidePlayerIndicator();
    pos[2].style.color = "red";
    pos[5].style.color = "red";
    pos[8].style.color = "red";
    return showWinner(e.target.innerText);
  } else if (tieCount == 9) {
    hidePlayerIndicator();
    winner.innerText = "TIE";
    winner.style.color = "red";
  }
}

function showWinner(winnerSymbol) {
  winner.innerText = winnerSymbol + " won";
}
function hidePlayerIndicator() {
  playerIndicator.style.display = "none";
}

function disableAllButtons() {
  pos.forEach((elem) => {
    elem.disabled = true;
  });
}

function showSymbol(e) {
  e.target.innerText = player;
  e.target.disabled = true;
  player == "x" ? (player = "o") : (player = "x");
  playerSpan.innerText = player;
  findWinner(e);
}

function eventHandler(e) {
  if (e.target.tagName === "BUTTON") {
    tieCount++;
    showSymbol(e);
  }
}
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

buttonContainer.addEventListener("click", eventHandler);
