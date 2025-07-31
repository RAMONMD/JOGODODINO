const dino = document.getElementById("dino");
const obstaculo = document.getElementById("obstaculo");
let isjumping = false;
let speed = 10;
const acceleration = 10;
const interval = 30;
const gameAreawidth = document.getElementById("gamearea").offsetWidth;
function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.style.animation = "none";
    dino.offsetHeight; // força reflow
    dino.style.animation = "jump 0.5s ease-out";
}
  function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.style.animation = "none";
    dino.offsetHeight; // força reflow
    dino.style.animation = "jump 0.5s ease-out";
    document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});}
    function moveObstaculo() {
    let obstaculoPos = obstaculo.offsetLeft;
    obstaculo.style.left = obstaculoPos - speed + "px";

    if (obstaculoPos <= -50) {
        obstaculo.style.left = gameAreaWidth + "px";
    }
      checkCollision();
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstaculoRect = obstaculo.getBoundingClientRect();
  if (
        dinoRect.right > obstaculoRect.left &&
        dinoRect.left < obstaculoRect.right &&
        dinoRect.bottom > obstaculoRect.top &&
        dinoRect.top < obstaculoRect.bottom
    ) {
    alert("Game Over!");
        clearInterval(gameInterval);
        clearInterval(speedInterval);
    }
}
    function increaseSpeed() {
    speed += acceleration;
}

const speedInterval = setInterval(increaseSpeed, 30000);
const gameInterval = setInterval(moveObstaculo, interval);
