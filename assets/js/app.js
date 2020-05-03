document.addEventListener("DOMContentLoaded", () => {
  let aleans = document.querySelectorAll(".grid div");
  let scoreBoard = document.querySelector("#scoreBoard");
  let final = document.getElementById("finalBOard");

  let width = 10;
  let curruntAleanPoint = 0;
  let shooterPosition = 95;
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
  function moveInvaders() {
    const leftEdge = aleanInvaders[0] % width === 0;
    const rightEdge =
      aleanInvaders[aleanInvaders.length - 1] % width === width - 1;

    if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
      direction = width;
    } else if (direction === width) {
      if (leftEdge) direction = 1;
      else direction = -1;
    }

    for (let i = 0; i <= aleanInvaders.length - 1; i++) {
      aleans[aleanInvaders[i]].classList.remove("aleans");
    }
    for (let i = 0; i <= aleanInvaders.length - 1; i++) {
      aleanInvaders[i] += direction;
    }
    for (let i = 0; i <= aleanInvaders.length - 1; i++) {
      aleans[aleanInvaders[i]].classList.add("aleans");
    }

    //game over
    if (aleans[shooterPosition].classList.contains("aleans", "shooter")) {
      final.textContent = "Game Over!";
      clearInterval(invaderId);
    }

    for (let i = 0; i <= aleanInvaders.length - 1; i++) {
      if (aleanInvaders[i] > aleans.length - (width - 1)) {
        final.textContent = "Game Over!";
        clearInterval(invaderId);
      }
    }
  }

  invaderId = setInterval(moveInvaders, 500);
});
