// Variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero's


let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// Variables for setInterval & timerStatus

let timerInterval = null; // because we want the choose the stop watch to run and not when the page loads
let timerStatus = "stopped";

// Stop watch function

const stopWatch = function(){
    seconds++;

    if(seconds/60 === 1){
        seconds = 0
        minutes++;

        if(minutes/60 === 1){
            minutes = 0
            hours++;
        }
    }
    // For implementing the leading 0's, otherwise it looks awkward like '0:0:45' instead of '00:00:45'
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString(); // converting seconds to string as well for concatenation
    }else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString(); // converting minutes to string as well for concatenation
    }else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString(); // converting hours to string as well for concatenation
    }else{
        leadingHours = hours;
    }

    let displayTimer = document.querySelector('#timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// setInterval(): A method that calls a function at specified interval, takes 2 paramter: "The function to call", "The Time interval in mili-second"


// The actual work with the Buttons
startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);  // clearInterval stops the timer
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});


resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#timer').innerText = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;

});