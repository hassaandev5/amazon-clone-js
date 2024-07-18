const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { name: "Placeholder Todo1", dueDate: "2023-12-16" },
  { name: "Placeholder Todo2", dueDate: "2023-12-16" },
  { name: "Placeholder Todo3", dueDate: "2023-12-16" },
  { name: "Placeholder Todo4", dueDate: "2023-12-16" },
  { name: "Placeholder Todo5", dueDate: "2023-12-16" },
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
      localStorage.setItem('todoList', JSON.stringify(todoList));
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
  localStorage.setItem("todoList", JSON.stringify(todoList));
  // console.log(todoList);

  inputElement.value = "";
  divElement.innerHTML = "";

  renderTodoList();
}
