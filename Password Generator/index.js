const char = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

let pwdEl = document.getElementById("pw1");
let pwdEl1 = document.getElementById("pw2");

function random(max) {
  let random = Math.floor(Math.random() * max) + 1;
  return random;
}

let pwd = [];
let pwd1 = [];
const length = 15;

function generate() {
  let pwd = [];
  let pwd1 = [];
  for (let i = 0; i < length; i++) {
    pwd.push(char[random(char.length)]);
  }
  for (let i = 0; i < length; i++) {
    pwd1.push(char[random(char.length)]);
  }

  pwdEl.textContent = pwd.join("");
  pwdEl1.textContent = pwd1.join("");
}
