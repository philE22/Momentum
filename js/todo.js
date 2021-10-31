const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDos(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    saveToDo()
}

function paintToDos(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDos);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoInput(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDos(newTodoObj)
    saveToDo();

}

toDoForm.addEventListener("submit", handleToDoInput)

const saveToDos =localStorage.getItem(TODOS_KEY)

if(saveToDos !== null){
    const paredToDos = JSON.parse(saveToDos);
    toDos = paredToDos;
    paredToDos.forEach(paintToDos);
}