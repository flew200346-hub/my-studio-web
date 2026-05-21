/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){
  if(!slides.length) return;

  slides.forEach(slide => {
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

if(slides.length){
  setInterval(nextSlide, 5000);
}


/* =========================
   LIGHTBOX
========================= */

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".lightbox button");

document
  .querySelectorAll(".gallery-grid img, .project-gallery img, .project-card img, .slide img")
  .forEach(img => {

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
  lightbox.addEventListener("click", event => {
    if(event.target === lightbox){
      lightbox.classList.remove("show");
    }
  });
}


/* =========================
   HIDE HEADER
   กลับมาเฉพาะตอนเลื่อนขึ้นสุด
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  if(scrollY <= 30){
    header.classList.remove("hide-header");
  }else{
    header.classList.add("hide-header");
  }

});


/* =========================
   PROJECT GALLERY MODAL
========================= */

const galleryModal = document.querySelector(".gallery-modal");
const galleryImage = document.querySelector(".gallery-image");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");
const closeGallery = document.querySelector(".close-gallery");

let galleryImages = [];
let galleryIndex = 0;

function openGallery(images){
  galleryImages = images;
  galleryIndex = 0;

  if(galleryModal && galleryImage){
    showGalleryImage();
    galleryModal.classList.add("show");
  }
}

function showGalleryImage(){
  if(!galleryImage || !galleryImages.length) return;

  galleryImage.src = galleryImages[galleryIndex];
}

if(galleryNext){
  galleryNext.addEventListener("click", () => {
    galleryIndex++;

    if(galleryIndex >= galleryImages.length){
      galleryIndex = 0;
    }

    showGalleryImage();
  });
}

if(galleryPrev){
  galleryPrev.addEventListener("click", () => {
    galleryIndex--;

    if(galleryIndex < 0){
      galleryIndex = galleryImages.length - 1;
    }

    showGalleryImage();
  });
}

if(closeGallery){
  closeGallery.addEventListener("click", () => {
    galleryModal.classList.remove("show");
  });
}

if(galleryModal){
  galleryModal.addEventListener("click", event => {
    if(event.target === galleryModal){
      galleryModal.classList.remove("show");
    }
  });
}


/* =========================
   WELCOME SCROLL REVEAL
========================= */

const welcomeSection = document.querySelector(".welcome-section");

if(welcomeSection){

  const welcomeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){
        welcomeSection.classList.add("show");
      }

    });

  }, {
    threshold:0.25
  });

  welcomeObserver.observe(welcomeSection);

}