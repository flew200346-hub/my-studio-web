const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){
  if(!slides.length) return;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide(){
  if(!slides.length) return;

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide(){
  if(!slides.length) return;

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

/* AUTO SLIDE */
if(slides.length){
  setInterval(() => {
    nextSlide();
  }, 5000);
}

/* LIGHTBOX */
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".lightbox button");

document.querySelectorAll(".gallery-grid img, .project-card img, .slide img").forEach((img) => {
  img.addEventListener("click", () => {
    if(lightbox && lightboxImg){
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    }
  });
});

if(closeBtn){
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}

if(lightbox){
  lightbox.addEventListener("click", (event) => {
    if(event.target === lightbox){
      lightbox.classList.remove("show");
    }
  });

  let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 80) {

    header.classList.add("hide-header");

  } else {

    header.classList.remove("hide-header");

  }

  lastScroll = currentScroll;

});
}
