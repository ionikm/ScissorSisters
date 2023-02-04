// Select the close button
const closeNav = document.querySelector('.close-nav');

// Add a click event listener to the close button
closeNav.addEventListener('click', function() {
  // Select the .nav-banner element
  const navBanner = document.querySelector('.nav-banner');

  // Remove the 'active' class from the .nav-banner element
  navBanner.classList.remove('active');
});
