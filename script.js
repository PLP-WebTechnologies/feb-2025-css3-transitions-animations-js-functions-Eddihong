
const animateButton = document.getElementById('animateButton');
const themeColorInput = document.getElementById('themeColor');
const savedColorSpan = document.getElementById('savedColor');
const animatedBox = document.getElementById('animatedBox');


document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('userColor');
  if (savedColor) {
    themeColorInput.value = savedColor;
    savedColorSpan.textContent = savedColor;
    animatedBox.style.backgroundColor = savedColor;
  }
});


themeColorInput.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  localStorage.setItem('userColor', selectedColor);
  savedColorSpan.textContent = selectedColor;
  animatedBox.style.backgroundColor = selectedColor;
});


animateButton.addEventListener('click', () => {
  animatedBox.classList.toggle('animate');


  animatedBox.addEventListener('transitionend', () => {
    animatedBox.classList.remove('animate');
  }, { once: true });
});