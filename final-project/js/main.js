// Variables 
const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const gameArea = document.getElementById("game-area");
const scoreboard = document.getElementById("scoreboard");
const instructionsBox = document.getElementById("instructions-box");
const header = document.getElementById("header");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const balloons = document.querySelectorAll(".balloon");

var isDay = true;
var score = 0;
var timeLeft = 60;
var timerInterval;


// Function to toggle day and night background themes
function toggleDayNight() {
  isDay = !isDay;

  // Update background, button colors, and footer text color
  document.documentElement.style.setProperty(
    "--background-day",
    isDay ? "linear-gradient(to bottom, #87ceeb, #1e90ff)" : "linear-gradient(to bottom, #2c3e50, #34495e)"
  );
  document.documentElement.style.setProperty("--button-day-bg", isDay ? "#fff" : "#000");
  document.documentElement.style.setProperty("--button-day-text", isDay ? "#000" : "#fff");
  document.documentElement.style.setProperty("--footer-day", isDay ? "black" : "white");
}



// Function that hides the balloons initially
function hideBalloons() {
  balloons.forEach((balloon) => {
    balloon.style.display = "none";
    balloon.style.animationPlayState = "paused";
  });
}



// Function to display the balloons when play it clicked
function showBalloons() {
  balloons.forEach((balloon) => {
    balloon.style.display = "block";
    balloon.style.animationPlayState = "running"; 
    balloon.addEventListener("click", popBalloon); 
  });
}



// Function to start the game
function startGame() {
  clearInterval(timerInterval);
  playButton.classList.add("hidden");
  resetButton.classList.remove("hidden");
  scoreboard.classList.remove("hidden");
  instructionsBox.classList.remove("hidden");
  header.classList.add("moved-up");

  // Show the balloons and start animations
  showBalloons();

  // Start the timer
  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}



// Function to pop a balloon
function popBalloon(event) {
  score++;
  scoreDisplay.textContent = score;

  // Stop the animation and create a pop effect
  const balloon = event.target;
  balloon.style.animation = "none"; 
  balloon.style.opacity = "0"; 
  setTimeout(() => {
    balloon.style.opacity = "1"; 
    balloon.style.animation = "floatUp 8s linear infinite"; // Restart animation with updated duration
  }, 100); // Delay to make the pop visible
}



// Function to end the game
function endGame() {
  balloons.forEach((balloon) => {
    balloon.style.animationPlayState = "paused"; 
    balloon.removeEventListener("click", popBalloon); 
  });

  // Display the final score
  gameArea.innerHTML = `
    <div class="final-score">
      <h2>Game Over!</h2>
      <p>Your Score: ${score}</p>
    </div>
  `;

  resetButton.classList.remove("hidden");
  playButton.classList.add("hidden"); 
}



// Reset the game
function resetGame() {
  // Reset all variables and DOM elements
  clearInterval(timerInterval);
  score = 0;
  timeLeft = 60;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  // Reset balloons
  balloons.forEach((balloon) => {
    balloon.style.animationPlayState = "paused"; 
    balloon.style.display = "none"; 
    balloon.style.animation = "floatUp 10s linear infinite paused"; 
  });

  // Restore game area with balloons
  gameArea.innerHTML = ''; // Clear final score
  balloons.forEach((balloon) => {
    gameArea.appendChild(balloon); // Add balloons back to the game area
  });

  // Reset UI elements
  playButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
  scoreboard.classList.add("hidden");
  instructionsBox.classList.add("hidden");
  header.classList.remove("moved-up");
}



// Event Listeners
playButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);


// Start the day-night cycle
setInterval(toggleDayNight, 10000); 


// Initialize by hiding balloons
hideBalloons();


