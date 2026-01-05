document.getElementById("motivateBtn").addEventListener("click", function () {
  alert("Keep pushing forward and never give up on your dreams!");
  // Visual feedback: Flashes the background red like Ghost Rider's flame
  document.body.style.backgroundColor = "#e62117";
  setTimeout(() => {
    document.body.style.backgroundColor = "#0a0a0a";
  }, 200);
});

// Scroll Reveal Effect: Headers glow when they come into view
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.style.borderLeftColor = "#ffcc00"; // Glow yellow
    } else {
      section.style.borderLeftColor = "#e62117"; // Back to red
    }
  });
});