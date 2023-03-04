// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.querySelector('.modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

// Wherever we click on the page, the modal will close if it's open

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});