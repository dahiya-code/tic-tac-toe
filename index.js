let human = 1,
  comp = 0;
let level = -1;
let moves = 0;
// bot[], player1[] and player2[] stores the magic number of corresponding move of bot, player1 and player2 respectively
let bot = [];
let player1 = [];
let player2 = [];
let occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let flag = 0;
let flag1 = 0;
const magicsquare = [2, 7, 6, 9, 5, 1, 4, 3, 8];

const vsPlayer = (n) => {
  let x = document.getElementById("but0");
  let y = document.getElementById("but1");
  if (moves & 1) {
  }
};

const clicked = (n) => {
  console.log(n);
  if (level === -1) {
    alert("Select 'Vs Bot' or 'Vs Player' first");
    return;
  }
  if (occupied[n - 1]) return;
  moves++;
  let x = document.getElementById(n);
  let sign;
  if (level === 0) {
    sign = moves % 2;
    x.textContent = "X";
    vsPlayer(n);
  } else {
    //BOT
  }
};

const hover = () => {
  let y = document.getElementById("levels");
  y.style.visibility = "visible";
  //   if (level <= 0) {
  //     let x = document.getElementById("b1");
  //     x.style.backgroundColor = "#808080";
  //   } else {
  //     let x = document.getElementById("b1");
  //     x.style.backgroundColor = "#C71585";
  //   }
};
const notHover = () => {
  let y = document.getElementById("levels");
  y.style.visibility = "hidden";
  //   if (level <= 0) {
  //     var x = document.getElementById("button1");
  //     x.style.backgroundColor = "#A9A9A9";
  //   } else {
  //     var x = document.getElementById("button1");
  //     x.style.backgroundColor = "deepPink";
  //   }
};
