// Define UI Vars

const taskInput = document.querySelector('#exampleFormControlInput1');
console.log(taskInput.nextSibling);

const taskAddBtn = document.querySelector('.btn.btn-outline-success.btn-sm');

const taskFilter = document.querySelector('#exampleFormControlInput2');

const taskDeleteAll = document.querySelector('.btn.btn-outline-danger.btn-lg');

const taskCollection = document.querySelector('#task-collection');
console.log(taskAddBtn);

// alert creation


// Load all events
loadEventListener()


// Load all events function
function loadEventListener(){
    taskAddBtn.addEventListener('click', addTask);
    taskInput.addEventListener("keyup", enterTask);
}

// add item on click

function addTask(event) {
    if (taskInput.value === "") {
        alert('Please add a task')
    } else {
        //create table raw for task
        const taskRaw = document.createElement('tr');
        const task = document.createElement('th');
        const taskDelete = document.createElement('th');
        // adding task to table
        task.innerHTML = `${taskInput.value}`;
        taskDelete.classList= 'left-btn'
        taskDelete.innerHTML = `<button type="button" class="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
        </svg> Delete</button>`
        taskRaw.appendChild(task);
        taskRaw.appendChild(taskDelete);
        console.log(taskRaw);
        taskCollection.appendChild((taskRaw));
    }
    taskInput.value = "";
    event.preventDefault()
}

// make tasks adable woith enter key 
function enterTask(event) {
    if (event.key == "Enter") {
        taskAddBtn.click();
    }
    event.preventDefault();
}
