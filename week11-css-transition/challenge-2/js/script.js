
function startball() {
  let launcher = document.getElementById("launcher");
  launcher.classList.add("launch");

  let ball = document.getElementById("ball-wrap");
  ball.classList.add("animate");
  

  launcher.addEventListener("transitionend", function() {
    this.classList.remove("launch");
  });
  ball.addEventListener("transitionend", function(){
    //on end, return ball to original position
    this.classList.remove("animate");
  });
}