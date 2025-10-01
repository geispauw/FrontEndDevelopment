const shoeChange1 = document.querySelector(
  "main section:nth-of-type(7) ul > li:nth-of-type(2) ul li:nth-of-type(1) button"
);
const shoeChange2 = document.querySelector(
  "main section:nth-of-type(7) ul > li:nth-of-type(2) ul li:nth-of-type(2) button"
);
const shoeImage = document.querySelector(
  "main section:nth-of-type(7) ul > li:nth-of-type(2) a img:first-of-type"
);

shoeChange1.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  shoeImage.src = "images/2_XT-6_SHADOW.jpg";
});

shoeChange2.addEventListener("click", (event) => {
  // event.stoppropagation & preventdefault is van chatGPT: "My page is jumping back to start on button press, how do i fix this?"
  event.stopPropagation();
  event.preventDefault();
  shoeImage.src = "images/XT_SHADOW_SMALL_ALTCOLOR.jpg";
});

shoeImage.addEventListener("mouseover", () => {
  // .includes is van chatGPT. heeft hij met de prompt hierboven ook gelijk gefixt, weet niet waarom.
  if (shoeImage.src.includes("/images/2_XT-6_SHADOW.jpg")) {
    shoeImage.src = "images/2_XT-6_SHADOW_ALT.jpg";
  } else {
    return;
  }
});

shoeImage.addEventListener("mouseout", () => {
  if (shoeImage.src.includes("/images/2_XT-6_SHADOW_ALT.jpg")) {
    shoeImage.src = "images/2_XT-6_SHADOW.jpg";
  } else {
    return;
  }
});

const checkBox = document.querySelector("section:first-of-type input");
const hiddenItems = document.querySelectorAll(
  "section:first-of-type ul li:nth-of-type(n+7)"
);

const label = document.querySelector("section:first-of-type label");
// https://medium.com/@ryan_forrester_/hide-and-show-elements-in-javascript-a-complete-guide-e44871f15774 //
checkBox.addEventListener("change", () => {
  hiddenItems.forEach((item) => {
    if (checkBox.checked) {
      item.style.display = "list-item";
      label.style.display = "none";
    } else {
      item.style.display = "none";
    }
  });
});
