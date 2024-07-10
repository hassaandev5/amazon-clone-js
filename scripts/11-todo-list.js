const todoList = [
  { name: "make dinner", dueDate: "2023-12-16" },
  { name: "Watch youtube", dueDate: "2023-12-15" },
  { name: "make project", dueDate: "2023-12-14" },
];

renderTodoList();
function renderTodoList() {
  document.querySelector(".js-todo-list").innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    document.querySelector(".js-todo-list").innerHTML += `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button">Delete</button>`;
  }
  // console.log(document.querySelector(".js-todo-list"));
}

function addTodo() {
  const inputElement = document.querySelector(".js-todo-input");
  const dateInputElement = document.querySelector(".js-todo-due-date");
  const divElement = document.querySelector(".js-todo-list");
  // console.log(divElement);

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    //   dueDate: dueDate
    name,
    dueDate,
  });
  // console.log(todoList);

  inputElement.value = "";
  divElement.innerHTML = "";

  renderTodoList();
}
