let slider = document.querySelector(".slider");
let upArrow = document.querySelector(".up");
let downArrow = document.querySelector(".down");
let images = document.querySelectorAll(".image");

let sliderNumber = 1;
// let slideNum = 4;
let length = images.length;

const slideUp = () => {
  slider.style.transform = `translateY(-${sliderNumber * 500}px)`;
  sliderNumber++;
  console.log("up");
};

// const slideDown = () => {
//   slider.style.transform = `translateY(-${(sliderNumber - 1) * 500}px)`;
//   sliderNumber--;
//   console.log("down");
// };
const slideDown = () => {
  console.log("Slider number before slide down:", sliderNumber);
  slider.style.transform = `translateY(-${(sliderNumber - 2) * 500}px)`;
  console.log(
    "TranslateY value:",
    `translateY(-${(sliderNumber - 1) * 500}px)`
  );
  sliderNumber--;
  console.log("Slider number after slide down:", sliderNumber);
  console.log("down");
};

// const getFirstSlide = () => {
//   slider.style.transform = `translateY(-0px )`;
//   sliderNumber = 1;
//   console.log("first slide");
// };
const getFirstSlide = () => {
  slider.style.transform = `translateY(-0px)`;
  sliderNumber = 1;
  console.log("first slide");
};
// const getLastSlide = () => {
//   slider.style.transform = `translateY(-${(length - 1) * 500}px)`;
//   slideNumber = length;
//   console.log("last slide");
// };
// const getLastSlide = () => {
//   slider.style.transform = `translateY(-${(length - 1) * 500}px)`;
//   sliderNumber = length; // Update sliderNumber instead of slideNumber
//   console.log("last slide");
// };
const getLastSlide = () => {
  slider.style.transform = `translateY(-${(length - 1) * 500}px)`;
  sliderNumber = length;
  console.log("last slide");
};

upArrow.addEventListener("click", () => {
  sliderNumber < length ? slideUp() : getFirstSlide();
});

downArrow.addEventListener("click", () => {
  sliderNumber > 1 ? slideDown() : getLastSlide();
});
