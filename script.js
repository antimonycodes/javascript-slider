let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".image");
let bottom = document.querySelector(".bottom");

let slideNumber = 1;

// rightArrow.addEventListener("click", () => {
//   if (slideNumber < images.length) {
//     slider.style.transform = `translateX(-${slideNumber * 500}px)`;
//     slideNumber++;
//     console.log("clicked");
//   } else {
//     slider.style.transform = `translateX(-500px)`;
//     slideNumber = 1;
//   }
// });

let length = images.length;
const colors = ["red", "blue", "yellow", "#D1C2A3", "#FC7038"];

//
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 500}px)`;
    slideNumber = index + 1;
    buttons[slideNumber - 1].style.backgroundColor =
      colors[(slideNumber - 1) % colors.length];
  });
});

let nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 500}px)`;
  slideNumber++;
};
let prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`;
  slideNumber--;
};

let getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  slideNumber = length;
};

rightArrow.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor =
    colors[(slideNumber - 1) % colors.length];
});
leftArrow.addEventListener("click", () => {
  console.log("clickedd");
  slideNumber > 1 ? prevSlide() : getLastSlide();
  resetBg();
  // div.style.backgroundColor = colors[i % colors.length];
  buttons[slideNumber - 1].style.backgroundColor =
    colors[(slideNumber - 1) % colors.length];
});

// leftArrow.addEventListener("click", () => {
//   if (slideNumber < images.length) {
//     slider.style.transform = `translateX(${slideNumber * 500}px)`;
//     slideNumber--;
//     console.log("clicked");
//   } else {
//     slider.style.transform = `translateX(-0px)`;
//     slideNumber = 1;
//   }
// });

//

// let rightArrow = document.querySelector(".right");
// let leftArrow = document.querySelector(".left");
// let slider = document.querySelector(".slider");
// let images = document.querySelectorAll(".image");

// let defaultWidth = 500;
// let slideNumber = 1;
// let prevNumber = slideNumber - 1;

// let nextslide = () => {
//   slider.style.transform = `translateX(-${slideNumber * defaultWidth}px)`;
//   slideNumber++;
// };

// let prevSlide = () => {
//   slider.style.transform = `translateX(-${prevNumber * defaultWidth}px)`;
//   prevNumber++;
// };
// let firstSlide = () => {
//   slideNumber = 1;
// };

// rightArrow.addEventListener("click", () => {
//   slideNumber < images.length ? nextslide() : prevSlide();
// });

// leftArrow.addEventListener("click", () => {
//   prevSlide();
// });

// SLIDER TWO
