const button = document.querySelector('.scroll-down-button');

button.addEventListener('click', () => {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
