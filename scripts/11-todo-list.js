const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-todo-input");
  const paraElement = document.querySelector(".js-todo-list");
  const todoName = inputElement.value;

  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = "";
}
