const btn = document.getElementById('btn');
const bmiInput = document.getElementById('bmi-result');
const weightCondition = document.getElementById('weight-condition');

const bmiCalculator = function(){
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;

    const bmi = weight / (height * height);
    bmiInput.value = bmi;

    if(bmi  < 18.5){
        weightCondition.innerText = 'Under weight';
    }else if(bmi >= 18.5 && bmi <= 24.9){
        weightCondition.innerText = 'Normal weight';
    }else if(bmi >= 25 && bmi <= 29.9){
        weightCondition.innerText = 'Over weight';
    }else if(bmi >= 30){
        weightCondition.innerText = 'Obesity';
    }
}


btn.addEventListener('click', bmiCalculator);