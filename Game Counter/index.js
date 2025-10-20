let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home");
let guestScoreEl = document.getElementById("guest");

function oneHome() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function twoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function threeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function oneGuest() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
}

function twoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function threeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}
