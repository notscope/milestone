// Reveal skill items
ScrollReveal().reveal('.skill-item', {
  delay: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  reset: false
});

// Reveal interest items
ScrollReveal().reveal('.interests-item', {
  delay: 300,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  reset: false
});

// Reveal project items
ScrollReveal().reveal('.project-item', {
  delay: 400,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  reset: false
});

// Reveal about section
ScrollReveal().reveal('.about-me', {
  delay: 200,
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  reset: false
});


const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

toggleButton.addEventListener("click", () => { 
    body.classList.toggle("light-mode");
    const isLightMode = body.classList.contains("light-mode");

    localStorage.setItem("theme", isLightMode ? "light" : "dark");

    toggleButton.innerHTML = isLightMode
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});