const texts = [
  "Gratis bezorging voor leden",
  "Gratis retourneren binnen 30 dagen",
];
let index = 0;
const p = document.getElementById("switch-text"); // Select your target <p>
const pSection = document.getElementById("psection")

psection.style.transition = "opacity 0.5s";
psection.style.opacity = "1";

function switchText() {
  psection.style.opacity = "0";
  setTimeout(() => {
    index = (index + 1) % texts.length;
    p.textContent = texts[index];
    psection.style.opacity = "1";
  }, 500); // Match transition duration
}

setInterval(switchText, 5000);