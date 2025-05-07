const learnBtn = document.querySelector('.center-content a');
const video = document.getElementById('bgVideo');
const hero = document.getElementById('hero');

learnBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Apply zoom + fade effect
  video.style.transition = "transform 0.5s ease, opacity 1s ease";
  video.style.transform = "scale(1.2)";
  video.style.opacity = "0";

  hero.style.transition = "opacity 1s ease";
  hero.style.opacity = "0";

  // Reload after animation
  setTimeout(() => {
    location.reload();
  }, 800);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('animate-in'); // <-- this should be a string
    }
  });
});

observer.observe(document.getElementById('whatsup'));
