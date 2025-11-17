import './style.css'

const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('#mobile-container');

burger.addEventListener('click', () => {
  mobileContainer.classList.toggle('hidden');
});
