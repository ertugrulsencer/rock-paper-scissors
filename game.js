let counter = 0;
let computer_choice = 0,
  user_choice = 0;
let gameResult = null;
const options = ["rock", "paper", "scissors"];
const elements = {
  counter: document.querySelector("#counter"),
  gameResult: document.querySelector("#gameResult"),
  userIcons: {
    rock: document.querySelector("#userIconRock"),
    paper: document.querySelector("#userIconPaper"),
    scissors: document.querySelector("#userIconScissors"),
  },
  computerIcons: {
    rock: document.querySelector("#computerIconRock"),
    paper: document.querySelector("#computerIconPaper"),
    scissors: document.querySelector("#computerIconScissors"),
  },
  buttons: {
    rock: document.querySelector("#btnRock"),
    paper: document.querySelector("#btnPaper"),
    scissors: document.querySelector("#btnScissors"),
  },
};
function removeAllClass() {
  elements.userIcons.rock.classList.remove("visible");
  elements.userIcons.paper.classList.remove("visible");
  elements.userIcons.scissors.classList.remove("visible");
  elements.computerIcons.rock.classList.remove("visible");
  elements.computerIcons.paper.classList.remove("visible");
  elements.computerIcons.scissors.classList.remove("visible");
}
function randomOption() {
  return options[Math.floor(Math.random() * 3)];
}
function runCounter(max, func) {
  elements.counter.textContent = counter;
  elements.counter.animate([{ transform: "scale(0)" }], {
    easing: "linear",
    direction: "alternate",
    duration: 1000,
  });
  elements.counter.textContent = ++counter;
  const count = setInterval((e) => {
    if (counter < max) {
      elements.gameResult.classList.remove("visible");
      elements.userIcons.rock.classList.toggle("visible");
      elements.computerIcons.rock.classList.toggle("visible");
      elements.counter.animate([{ transform: "scale(0)" }], {
        easing: "linear",
        direction: "alternate",
        duration: 1000,
      });
      elements.counter.textContent = ++counter;
    } else {
      counter = 0;
      elements.counter.textContent = null;
      computer_choice = randomOption();
      if (computer_choice == user_choice) {
        gameResult = "Berabere";
      } else if (
        (computer_choice == "rock" && user_choice == "paper") ||
        (computer_choice == "paper" && user_choice == "scissors") ||
        (computer_choice == "scissors" && user_choice == "rock")
      ) {
        gameResult = "Kazandınız";
      } else {
        gameResult = "Kaybettiniz";
      }
      func(gameResult);
      elements.gameResult.classList.add("visible");
      elements.gameResult.textContent = gameResult;
      clearInterval(count);
    }
  }, 500);
}
function addComputerClass(choice = computer_choice) {
  if (choice == "rock") {
    elements.computerIcons.rock.classList.add("visible");
  } else if (choice == "paper") {
    elements.computerIcons.paper.classList.add("visible");
  } else {
    elements.computerIcons.scissors.classList.add("visible");
  }
}
elements.buttons.rock.addEventListener("click", (e) => {
  removeAllClass();
  elements.gameResult.textContent = null;
  user_choice = "rock";
  counter == 0
    ? runCounter(3, (result) => {
        elements.userIcons.rock.classList.add("visible");
        addComputerClass(computer_choice);
      })
    : null;
});
elements.buttons.paper.addEventListener("click", (e) => {
  removeAllClass();
  elements.gameResult.textContent = null;
  user_choice = "paper";
  counter == 0
    ? runCounter(3, (result) => {
        elements.userIcons.paper.classList.add("visible");
        addComputerClass(computer_choice);
      })
    : null;
});
elements.buttons.scissors.addEventListener("click", (e) => {
  removeAllClass();
  elements.gameResult.textContent = null;
  user_choice = "scissors";
  counter == 0
    ? runCounter(3, (result) => {
        elements.userIcons.scissors.classList.add("visible");
        addComputerClass(computer_choice);
      })
    : null;
});
