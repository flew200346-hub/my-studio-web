document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .big-emoji, .contact-box, .stat, .step, .gallery-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(35px)";
    card.style.transition = ".7s ease";
    observer.observe(card);
  });

  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox img");
  const closeBtn = document.querySelector(".lightbox button");

  document.querySelectorAll(".gallery-item img, .project-cover img").forEach(img => {
    img.addEventListener("click", () => {
      if(lightbox && lightboxImg){
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
      }
    });
  });

  if(closeBtn){
    closeBtn.addEventListener("click", () => lightbox.classList.remove("show"));
  }

  if(lightbox){
    lightbox.addEventListener("click", (e) => {
      if(e.target === lightbox){
        lightbox.classList.remove("show");
      }
    });
  }
});
