document.addEventListener("DOMContentLoaded", () => {
  let aleans = document.querySelectorAll(".grid div");
  let scoreBoard = document.querySelector("#scoreBoard");

  let width = 10;
  let curruntAleanPoint = 0;
  let shooterPosition = 94;
  let alienInvadersTakenDown = [];
  let result = 0;
  let direction = 1;
  const aleanInvaders = [0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24];
  let invaderId = null;

  //add invaders
  aleanInvaders.forEach((invader) => {
    aleans[curruntAleanPoint + invader].classList.add("aleans");
  });

  //add shooter
  aleans[shooterPosition].classList.add("shooter");

  //move shooter
  document.addEventListener("keydown", (event) => {
    aleans[shooterPosition].classList.remove("shooter");
    switch (event.keyCode) {
      case 37:
        if (shooterPosition % width !== 0) shooterPosition -= 1;
        break;
      case 39:
        if (shooterPosition % width < width - 1) shooterPosition += 1;
        break;
      default:
    }
    aleans[shooterPosition].classList.add("shooter");
  });

  //move invaders
  function moveInvaders() {}
});
