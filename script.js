document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.background = "rgba(0,0,0,0.95)";
    } else {
      nav.style.background = "rgba(0,0,0,0.8)";
    }
  });
});
// Lazy Loading
document.addEventListener("DOMContentLoaded", () => {
  const lazyItems = document.querySelectorAll('.lazy');
  const options = { root: null, rootMargin: "0px", threshold: 0.1 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.tagName === "IMG") {
          entry.target.src = entry.target.getAttribute("data-src");
        } else if (entry.target.tagName === "VIDEO") {
          let source = entry.target.querySelector("source");
          source.src = source.getAttribute("data-src");
          entry.target.load();
        }
        obs.unobserve(entry.target);
      }
    });
  }, options);

  lazyItems.forEach(item => {
    observer.observe(item);
  });
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
