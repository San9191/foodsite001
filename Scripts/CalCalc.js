// console.log(document.querySelector(".inputFruit").textContent);
// document.querySelector(".inputFruit").textContent = "Correct numberumber!";

// console.log((document.querySelector(".guess").value = 23));

// Setting up the DOM initial data

const secretNumber = Math.trunc(Math.random() * 20);

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = " #60b347";

    document.querySelector((".number".style.width = "30rem"));
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!!";
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!!";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = "20";
    const secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector(".message").textContent = "Input A number ....";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = " #222";
    document.querySelector((".number".style.width = "15rem"));
  });
});

// document.querySelector(".again").addEventListener("click", function () {
//   document.querySelector(".score").textContent;
//   document.querySelector(".number").textContent;
//   document.querySelector(".message").textContent;
// });
