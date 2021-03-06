// Bind DOM elements to vars
const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById('todos');

// Side Effects & Life cycle
const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todoData = [];

existingTodos.forEach(y => addTodo(y));

// Update UI
function addTodo(x) {
  todoData.push(x);
  const li = document.createElement('li');
  li.innerHTML = x;
  todoList.appendChild(li);
  localStorage.setItem('todos', JSON.stringify(todoData));
  input.value = '';
}

// Event listeners
form.onsubmit = e => {
  e.preventDefault();
  addTodo(input.value);
}
