const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

let n = inputEl.value;

convertBtn.addEventListener("click", function () {
  const raw = inputEl.value;
  const n = Number(raw);
  let lengthmi = n * 3.281;
  let lengthim = n / 3.281;

  let litremi = n / 4.546;
  let litreim = n * 4.546;

  let massmi = n * 2.205;
  let massim = n / 2.205;

  const f = (v) => Number(v).toFixed(3);

  lengthEl.textContent = `${n} meters = ${f(lengthmi)} feet | ${n} feet = ${f(
    lengthim
  )} meters`;

  volumeEl.textContent = `${n} litres = ${f(
    litremi
  )} gallons | ${n} gallons = ${f(litreim)} litres`;

  massEl.textContent = `${n} kilograms = ${f(
    massmi
  )} pounds | ${n} pounds = ${f(massim)} kilograms`;
});
