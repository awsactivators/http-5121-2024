document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("playPauseButton");
  var stage = document.getElementById("stage");
  var ball = document.getElementById("ball");


  let isPaused = false;

  button.addEventListener("click", () => {
    if (isPaused) {
      // Play the animations
      stage.style.animationPlayState = "running";
      ball.style.animationPlayState = "running";
      button.textContent = "Pause";
      button.style.backgroundColor = "red";
      button.style.border = "none";
      button.style.color = "black";
    } else {
      // Pause the animations
      stage.style.animationPlayState = "paused";
      ball.style.animationPlayState = "paused";
      button.textContent = "Play";
      button.style.backgroundColor = "green";
      button.style.border = "none";
      button.style.color = "white";
    }
    isPaused = !isPaused; 
  });
});

