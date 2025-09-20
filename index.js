const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.navItem');

// Toggle nav open/close
hamburger.addEventListener('click', () => {
nav.classList.toggle('active');
});

// Close nav when a link is clicked
navItems.forEach(item => {
item.addEventListener('click', () => {
    nav.classList.remove('active');
});
});

// Make the nav bar transparent when scrolling
window.addEventListener('scroll', function () {
  const navSection = document.getElementById('navSection');
  if (window.scrollY > 20) {
    navSection.classList.add('scrolled');
  } else {
    navSection.classList.remove('scrolled');
  }
});

// Body Scroll effect
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    offset: 120,
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'    
  });
});

// Preloader
// Wait for everything to load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");

  // Optional: Remove from DOM after fade
  setTimeout(() => {
    preloader.style.display = "none";
  }, 5000);
});


// Contact form Section

// document.getElementById("messageForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Your message has been sent!");
//   this.reset(); // Clears the form
// });





