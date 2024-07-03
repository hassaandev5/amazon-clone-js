const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-todo-input");
  const todoName = inputElement.value;

  todoList.push(todoName);
  console.log(todoList);
}
