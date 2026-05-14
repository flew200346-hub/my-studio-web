document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .big-emoji, .contact-box");

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
});
