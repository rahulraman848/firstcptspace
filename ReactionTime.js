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

function remove() {
  button.style.display = "none";
}

function doIt() {
  if (attempts < 5) {
    playAgain.style.visibility = "hidden";
    let time = document.querySelector("h1");
    let seconds = 3;

    time.innerHTML = seconds;

    let countdown = setInterval(clock, 1000);

    function clock() {
      let topVal = getRandValue(-(window.innerHeight), window.innerHeight);
      let leftVal = getRandValue(-window.innerHeight, window.innerWidth);
      seconds--;
      time.innerHTML = seconds;
      if (seconds == 0) {
        clearInterval(countdown);
        time.innerHTML = "Go!";
        setTimeout(() => {
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
    document.write(
      "Your 5 scores were " +
        reactionTimes +
        "<br> <br> Your average time is " +
        sum / 5 +
        " ms"
    );
  }
}
function getRandValue(min, max) {
  return Math.random() * (max - min) + min;
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
