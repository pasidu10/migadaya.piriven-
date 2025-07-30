// Smooth scrolling effect for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    if(link.getAttribute("href").includes("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
