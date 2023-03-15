// Scroll to top
const header = document.querySelector(".primary-heading");
const footer = document.querySelector(".footer-container");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="caret-up-outline" class="scroll-top"></ion-icon>`; // class="scroll-top"
footer.after(scrollElement);

scrollElement.addEventListener("click", function () {
  const scrollToTop = header.scrollIntoView({ behavior: "smooth" });
});

// Buttons
const all = document.querySelector(".all");
const breakfast = document.querySelector(".break");
const lunch = document.querySelector(".lun");
const shakes = document.querySelector(".shak");
const dinner = document.querySelector(".din");

const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");
const fourth = document.querySelector(".fourth");


// All
all.addEventListener('click', function(){
    first.forEach((item) => item.classList.remove("breakfast"));
    second.forEach((item) => item.classList.remove("lunch"));
    third.forEach((item) => item.classList.remove("shake"));
    fourth.classList.remove("dinner");
});


// BreakFast
breakfast.addEventListener("click", function () {
  first.forEach((item) => item.classList.remove("breakfast"));

  second.forEach((item) => item.classList.add("lunch"));
  third.forEach((item) => item.classList.add("shake"));
  fourth.classList.add("dinner");
});

// Lunch
lunch.addEventListener("click", function () {
  second.forEach((item) => item.classList.remove("lunch"));

  first.forEach((item) => item.classList.add("breakfast"));
  third.forEach((item) => item.classList.add("shake"));
  fourth.classList.add("dinner");
});

// Shake
shakes.addEventListener('click', function(){
    third.forEach((item) => item.classList.remove("shake"));

    second.forEach((item) => item.classList.add("lunch"));
    first.forEach((item) => item.classList.add("breakfast"));
    fourth.classList.add("dinner");
});

// Dinner
dinner.addEventListener("click", function(){
    fourth.classList.remove("dinner");

    first.forEach((item) => item.classList.add("breakfast"));
    second.forEach((item) => item.classList.add("lunch"));
    third.forEach((item) => item.classList.add("shake"));
});