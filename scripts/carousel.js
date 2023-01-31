// Set the starting slide to 0
var currentSlide = 0;

// Get all slides in the carousel
var slides = document.querySelectorAll('.review');

// Get the total number of slides
var totalSlides = slides.length;

// Function to show a specific slide
function showSlide(n) {
  // Hide the current slide
  slides[currentSlide].style.display = 'none';

  // Calculate the index of the next slide, wrapping around if necessary
  currentSlide = (n + totalSlides) % totalSlides;

  // Show the next slide
  slides[currentSlide].style.display = 'flex';
}

// Show the first slide
showSlide(0);

// Set an interval to automatically show the next slide after 3 seconds
var slideInterval = setInterval(function() {
  showSlide(currentSlide + 1);
}, 5000);

// Add an event listener to the left chevron
document.querySelector('.review-slider-left').addEventListener('click', function() {
  // Clear the automatic sliding interval when the left chevron is clicked
  clearInterval(slideInterval);
  
  // Show the previous slide
  showSlide(currentSlide - 1);
});

// Add an event listener to the right chevron
document.querySelector('.review-slider-right').addEventListener('click', function() {
  // Clear the automatic sliding interval when the right chevron is clicked
  clearInterval(slideInterval);
  
  // Show the next slide
  showSlide(currentSlide + 1);
});
