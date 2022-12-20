const button = document.getElementById("myButton");
button.addEventListener("click", remove);
const shape = document.getElementById("shape");
shape.style.visibility = "hidden";
let firstDate = 0;
const playAgain = document.getElementById("playAgain");
playAgain.style.visibility = "hidden";
let reactionTimes = [];
let attempts = 0;
let sum = 0;
let instructions = document.getElementById("instructions");
const finalTime = document.getElementById("results");
const table = document.getElementById("table");
table.style.display = "none";
const restart = document.getElementById("restart");
restart.style.display = "none";
const verygood = document.getElementById("verygood");
const good = document.getElementById("good");
const normal = document.getElementById("normal");
const subpar = document.getElementById("subpar");
const bad = document.getElementById("bad");

function remove() {
  button.style.display = "none";
  instructions.style.display = "none";
}

function main() {
  if (attempts < 5) {
    playAgain.style.visibility = "hidden";
    let time = document.querySelector("h1");
    let seconds = 3;

    time.innerHTML = seconds;

    let countdown = setInterval(clock, 1000); //Credit to Thapa Technical on Youtube

    function clock() {
      let topVal = getRandValue(-window.innerHeight, window.innerHeight);
      let leftVal = getRandValue(-window.innerHeight, window.innerWidth);
      seconds--;
      time.innerHTML = seconds;
      if (seconds == 0) {
        clearInterval(countdown);
        time.innerHTML = "Go!";
        setTimeout(() => { // Credit to W3Schoolss
          time.innerHTML = "";
        }, 700);
        setTimeout(() => {
          shape.style.visibility = "visible";
          shape.style.marginTop = topVal + "px";
          shape.style.marginLeft = leftVal + "px";
          firstDate = new Date();
        }, 700);
        return;
      }
    }
  } else {
    for (let i = 0; i < reactionTimes.length; i++) {
      sum += reactionTimes[i];
    }
    averageTime = Math.trunc(sum/5);
    const resultMessage = `Your average reaction time is ${averageTime} ms.`;
    playAgain.style.visibility = "hidden";
    restart.style.display = "block";
    restart.style.marginTop = "-136px";
    finalTime.innerHTML = resultMessage;
    finalTime.style.fontFamily = "Georgia";
    finalTime.style.marginTop = "-200px";
    table.style.display = "block";
    table.style.marginTop = "100px";
    if(averageTime < 800){
      verygood.style.backgroundColor = "rgb(4, 125, 8)";
    }
    if(averageTime >= 800 && averageTime < 850){
      good.style.backgroundColor = "rgb(4, 181, 4)";
    }
    if(averageTime >= 850 && averageTime < 920){
      normal.style.backgroundColor = "lightgreen";
    }
    if(averageTime >= 920 && averageTime < 1400){
      subpar.style.backgroundColor = "lightsalmon";
    }
    if(averageTime >= 1400){
      bad.style.backgroundColor = "rgb(243, 35, 35)";
    }
  }
}
function getRandValue(min, max) {
  return Math.random() * (max - min) + min; //Credit to W3Schools
}
function reaction() {
  attempts++;
  secondDate = new Date();
  reactionTimes.push(secondDate - firstDate);
  shape.style.visibility = "hidden";
  if (attempts == 5) {
    playAgain.innerText = "Reveal your scores";
  }
  playAgain.style.visibility = "visible";
}
