let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.Navbar__Link-toggle').addEventListener('click', toggle);


function toggle() {
    var link = document.getElementsByClassName("item");
    for (var i = 0; i < link.length; i++) {
        if (link[i].style.display === "block") {
            link[i].style.display = "none";
          } else {
            link[i].style.display = "block";
          }
    }
    
  }

// Next/previous controls
function plusSlides(n) {
  changeSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  changeSlides(slideIndex = n);
}

function changeSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}