const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav");
const mainSection = document.getElementById("main-section");


//navbar and toggle code starts here
// Function to toggle the menu and shift the main section
function toggleMenu() {
  // Toggle the visibility of the nav links
  navLinks.classList.toggle("active");

  // Check if 'mainSection' exists and toggle 'shifted' class based on 'active' class
  if (mainSection) {
    if (navLinks.classList.contains("active")) {
      mainSection.classList.add("shifted"); // Shift the main section when menu is active
    } else {
      mainSection.classList.remove("shifted"); // Reset the shift when menu is closed
    }
  }
}


// Event listeners for click and touch events to ensure compatibility with all devices
hamburger.addEventListener("click", toggleMenu); // Handle click event on desktops
//hamburger.addEventListener("touchstart", toggleMenu); // Handle touch event on mobile devices

//navbar and toggle code ends here