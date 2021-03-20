let counter = 0;
const elements = {
  counter: document.querySelector("#counter"),
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
function random() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * 3)];
}
function runCounter(max) {
  elements.counter.textContent = counter;
  elements.counter.animate([{ transform: "scale(0)" }], {
    easing: "linear",
    direction: "alternate",
    duration: 1000,
  });
  elements.counter.textContent = ++counter;
  const count = setInterval((e) => {
    if (counter < max) {
      elements.counter.animate([{ transform: "scale(0)" }], {
        easing: "linear",
        direction: "alternate",
        duration: 1000,
      });
      elements.counter.textContent = ++counter;
    } else {
      counter = 0;
      elements.counter.textContent = null;
      clearInterval(count);
      alert(random());
    }
  }, 1000);
}
elements.buttons.rock.addEventListener("click", (e) => {
  counter == 0 ? runCounter(3) : null;
});
elements.buttons.paper.addEventListener("click", (e) => {
  counter == 0 ? runCounter(3) : null;
});
elements.buttons.scissors.addEventListener("click", (e) => {
  counter == 0 ? runCounter(3) : null;
});
