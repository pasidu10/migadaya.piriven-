// Lazy Loading
document.addEventListener("DOMContentLoaded", () => {
  const lazyItems = document.querySelectorAll('.lazy');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  lazyItems.forEach(item => observer.observe(item));
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
