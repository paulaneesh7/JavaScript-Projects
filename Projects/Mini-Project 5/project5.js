// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


// Event Listener for add-button

addTask.addEventListener('click', function(){
    let task = document.createElement('div');  // creating a new div
    task.classList.add('task'); // adding a new class to that created div

    let li = document.createElement('li'); // new li will be created through this
    li.innerText = `${inputTask.value}`; // this new li will dipslay whatever the text we insert in "Enter Task"
    task.appendChild(li); // appending the li to the created div above

    // creating the check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;  // adding the html for the button and the logo for it 
    checkButton.classList.add('checkTask');  // adding the class to the button
    task.appendChild(checkButton);  //appending the button to the div

    // Creating the delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`; //adding the html for the button and the logo for it 
    deleteButton.classList.add('deleteTask'); // adding the class to the button
    task.appendChild(deleteButton); // appending the button to the div


    if(inputTask.value === ""){
        alert("Please Enter a task");
    }else{
        taskContainer.appendChild(task); // adding the entire newly created div "task" to the actually present div in html "task-container"
    }

    inputTask.value = ""; // making the text field to insert the task empty once one task is already inserted in the list


    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});

