function toggleMenu() {
  let menu = document.getElementById("main-menu");
  menu.classList.toggle("show-small");

  let name = document.getElementById("name");
  if (menu.classList.contains("show-small")) {
    name.style.paddingTop = "150px";
  } else {
    name.style.paddingTop = "0px"; 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const skillsImages = document.querySelectorAll("#skills-banner img");
  const groups = { 1: 6, 2: 10 }; // Adjust sub-group counts based on screen size
  let currentGroup = 1;
  let currentCycle = 1;

  function rotateSkillsImages() {
    // Hide all images
    skillsImages.forEach(img => img.style.display = "none");

    // Show only images that match the current group and cycle
    skillsImages.forEach(img => {
      if (parseInt(img.getAttribute("data-group")) === currentGroup &&
          parseInt(img.getAttribute("data-cycle")) === currentCycle) {
        img.style.display = "inline-block";
      }
    });

    // Move to the next cycle or reset
    currentCycle++;
    if (currentCycle > groups[currentGroup]) {
      currentCycle = 1;
    }
  }

  // Initial display
  rotateSkillsImages();

  // Rotate every 5 seconds
  setInterval(rotateSkillsImages, 5000);
});
