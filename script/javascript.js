const texts = [
  "Gratis bezorging voor leden",
  "Gratis retourneren binnen 30 dagen",
];



const navButton1 = document.querySelector('footer nav:nth-of-type(1) > button')
const navButton2 = document.querySelector('footer nav:nth-of-type(2) > button')
const navButton3 = document.querySelector('footer nav:nth-of-type(3) > button')
const navButton4 = document.querySelector('footer nav:nth-of-type(4) > button')
const shoeImage = document.querySelector('main section:nth-of-type(4) ul > li:nth-of-type(2) a img:first-of-type')
const shoeChange2 = document.querySelector('main section:nth-of-type(4) ul > li:nth-of-type(2) a ul li:nth-of-type(2) button')
const shoeChange1 = document.querySelector('main section:nth-of-type(4) ul > li:nth-of-type(2) a ul li:nth-of-type(1) button')



shoeChange1.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  shoeImage.src= '../images/2_XT-6_SHADOW.jpg';
  
}
)

shoeChange2.addEventListener('click', (event) => {
  // event.stoppropagation & preventdefault is van chatGPT: "My page is jumping on button press, how do i fix this?"
  event.stopPropagation();
  event.preventDefault();
  shoeImage.src= '../images/XT_SHADOW_SMALL_ALTCOLOR.jpg';
  
}
)


shoeImage.addEventListener('mouseover', () => {
  // .includes is van chatGPT. heeft hij met de prompt hierboven ook gelijk gefixt, weet niet waarom.
  if (shoeImage.src.includes('/images/2_XT-6_SHADOW.jpg')) {
    shoeImage.src= '../images/2_XT-6_SHADOW_ALT.jpg'
  } else {
    return;
  }
});

shoeImage.addEventListener('mouseout', () => {
  if (shoeImage.src.includes( '/images/2_XT-6_SHADOW_ALT.jpg')) {
    shoeImage.src= '../images/2_XT-6_SHADOW.jpg'
  } else {
    return;
  }
});

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






