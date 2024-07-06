const todoList = ["Eat", "code", "sleep", "repeat"];

renderTodoList();
function renderTodoList() {
  for (let i = 0; i < todoList.length; i++) {
    document.querySelector(
      ".js-todo-list"
    ).innerHTML += `<p>${todoList[i]}</p>`;
  }
  console.log(document.querySelector(".js-todo-list"));
}

function addTodo() {
  const inputElement = document.querySelector(".js-todo-input");
  const divElement = document.querySelector(".js-todo-list");
  console.log(divElement);

  const todoName = inputElement.value;

  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = "";
  divElement.innerHTML = "";

  renderTodoList();
}
