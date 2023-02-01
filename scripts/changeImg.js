const images = document.querySelectorAll(".about_image");
let currentImageIndex = 0;

function slideShow() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].style.display = "block";
  setTimeout(slideShow, 4000);
}

slideShow();



