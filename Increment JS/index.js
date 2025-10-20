//document.getElementById("count-el").innerText = 5;

let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  let s = count + " - ";
  document.getElementById("save").textContent += " " + s;
  count = 0;
  countEl.innerText = count;
  console.log(count);
}
