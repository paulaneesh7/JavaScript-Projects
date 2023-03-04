// Variables

const display = document.querySelector(".color-display");
const btn = document.querySelector(".color-flip");
const header = document.querySelector('.header')

// Array to hold the random color values

const arr = ["#FF0000", "#916BBF", "#150050", "#5C527F", "#B42B51", "#864879", "#ECB365", "#5B8FB9", "#03C4A1", "#E94560", "#FBDCC4", "#7DB9B6", "#BFDB38", "#CD104D", "#15133C", "#EA8FEA"];

// Function to generate random numbers
const getRandomIndex = function(){
    return Math.floor(Math.random() * arr.length);
}

// Event Listener
btn.addEventListener("click", function () {
  const randomIndex = getRandomIndex();
  document.body.style.backgroundColor = arr[randomIndex];

  display.innerHTML = `Background Color : ${arr[randomIndex]}`;
  header.style.color = '#fff'
  btn.style.backgroundColor = arr[randomIndex];
});