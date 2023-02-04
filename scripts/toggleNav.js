const toggleNav = document.querySelector('.toggle-nav');
const navBanner = document.querySelector('.nav-banner');

toggleNav.addEventListener('click', function() {
  navBanner.classList.toggle('active');
});
