const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

function handleTodoInput(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(newTodo);
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleTodoInput)