let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let cards = [];
let sum = 0;

let player = {
  name: "John",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  if (isAlive === true && hasBlackJack === false) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
  }
}

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random > 10) {
    random = 10;
  } else if (random === 1) {
    random = 11;
  }

  return random;
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Won!! Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "Lost";
    isAlive = false;
  }
  sumEl.textContent = "Sum:" + " " + sum;

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  cardEl.textContent = "Cards:" + " " + cards[0] + " " + cards[1];
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

console.log(hasBlackJack);
