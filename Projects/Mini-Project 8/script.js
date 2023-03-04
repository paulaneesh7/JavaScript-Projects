// Variables

const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const value = document.querySelector('#value');

// Decrease button
decrease.addEventListener('click', function(){
    value.textContent--;
    if(Number(value.textContent) < 0){
        value.style.color = 'red'
    }else if(Number(value.textContent) == 0){
        value.style.color = '#000';
    }else if(Number(value.textContent) > 0){
        value.style.color = 'green';
    }
});

// Increase button
increase.addEventListener('click', function(){
    value.textContent++;
    value.style.color = 'green';
    if(Number(value.textContent > 0)){
        value.style.color = 'green';
    }else if(Number(value.textContent) == 0){
        value.style.color = '#000';
    }else if(Number(value.textContent) < 0){
        value.style.color = 'red'
    }
});


// Reset button
reset.addEventListener('click', function(){
    value.textContent = 0;
    value.style.color = '#000'
});

if(Number(value.textConten) == 0){
    value.style.color = '#000';
}