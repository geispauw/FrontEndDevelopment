const texts = [
  "Gratis bezorging voor leden",
  "Gratis retourneren binnen 30 dagen",
];



const navButton1 = document.querySelector('footer nav:nth-of-type(1) > button')
const navButton2 = document.querySelector('footer nav:nth-of-type(2) > button')
const navButton3 = document.querySelector('footer nav:nth-of-type(3) > button')
const navButton4 = document.querySelector('footer nav:nth-of-type(4) > button')




navButton1.addEventListener('click', () => {
  const menu = navButton1.nextElementSibling; 
  menu.classList.toggle('show');
}) 

navButton2.addEventListener('click', () => {
  const menu = navButton2.nextElementSibling; 
  menu.classList.toggle('show');
}) 

navButton3.addEventListener('click', () => {
  const menu = navButton3.nextElementSibling; 
  menu.classList.toggle('show');
}) 

navButton4.addEventListener('click', () => {
  const menu = navButton4.nextElementSibling; 
  menu.classList.toggle('show');
}) 






