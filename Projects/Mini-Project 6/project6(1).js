// Variables for Celcius

const celciusTemp = document.getElementById('celcius');
const displayFahr = document.getElementById('celcius-display');
const convertCelcius = document.querySelector('.celcius-convert');

// Button for Celcius to Fahrenheit
convertCelcius.addEventListener('click', function(){
    // console.log(celciusTemp.value);
    // console.log(typeof celciusTemp.value);
    // console.log( typeof Number(celciusTemp.value));

    const fahr = Math.floor((Number(celciusTemp.value) * 9/5) + 32);
    // console.log(`${fahr}℃`);

    displayFahr.value = fahr;
});


// Variables for Fahrenheit
const fahrTemp = document.getElementById('fahrenheit');
const displayCelcius = document.getElementById('fahrenheit-display');
const convertFahr = document.querySelector('.fahrenheit-convert');

// Button for Fahrenheit to Celcius
convertFahr.addEventListener('click', function(){
    const cel = Math.floor((Number(fahrTemp.value) - 32) * 5/9);
    displayCelcius.value = cel;
});