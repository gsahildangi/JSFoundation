// console.log(document.getElementById("todo-input"))
// console.log(document.getElementById("add-task-button"))
// console.log(document.getElementById("todo-list"))
//Check how the elements are fetched when we use document.getElementById("")
// we are wraping this in the this event lister beacuse as we wnted to read the tasks
// when the program got reload and then we want to render that on the ui.   
document.addEventListener("DOMContentLoaded" , () => {
    
const todoInput = document.getElementById("todo-input")
const addTaskButton = document.getElementById("add-task-button")
const todoList = document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => renderTask(task) );

addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
        id : Date.now(),
        text :taskText,
        completed :false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);  
    todoInput.value = "";
    console.log(tasks);
})

function renderTask(task){
   const li = document.createElement("li");
   li.setAttribute('data-id' ,task.id)
   if (task.completed) li.classList.add("completed")
   li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>  
   `
   li.addEventListener('click' , (e) => {
     if(e.target.tagName === "BUTTON") return;
     task.completed = !task.completed;
     li.classList.toggle('completed')
     saveTask();
   })

    li.querySelector('button').addEventListener('click' ,(e) => {
        e.stopPropagation(); //prevent toggle from firing.
        tasks = tasks.filter( t => t.id !== task.id)
        li.remove();
        saveTask();
    })

   todoList.appendChild(li)

}
function saveTask(){
   localStorage.setItem('tasks',JSON.stringify(tasks))
}
})