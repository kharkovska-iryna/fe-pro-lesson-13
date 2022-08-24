const addTaskBtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#input');
const list = document.querySelector('.list');

function Task(description) {
  this.description = description,
  this.completed = false
};

let tasks = [];
let completedTasks = [];

const createTemplate = (el, index) => {
  return `
    <div class="task-list">
      <div class="description ${el.completed ? 'checked' : ''}">${el.description}</div>
      <div class="buttons">
        <input onclick = completeTask(${index}) class="btn-complete" type="checkbox" ${el.completed ? 'checked' : ''}>
        <button onclick = deleteTask(${index}) class="btn-delete" type="button">Удалить задачу</button>
      </div>
    </div>
  `
};

const FillHtmlList = () => {
  list.innerHTML = '';
  if (tasks.length > 0) {
    tasks.forEach((el, index) => {
      list.innerHTML += createTemplate(el, index)
    })
    completedTasks = document.querySelectorAll('.description')
  }
};

function onSubmit(event) {
  event.preventDefault();
  tasks.push(new Task(taskInput.value));
  console.log(tasks);
  FillHtmlList();
  taskInput.value=''
};

const completeTask = index => {
  tasks[index].completed = !tasks[index].completed;
  if (tasks[index].completed) {
    completedTasks[index].classList.add('checked')
  } else {
    completedTasks[index].classList.remove('checked')
  }
};

addTaskBtn.addEventListener('click', onSubmit);

const deleteTask = index => {
  console.log(index);
  tasks.splice(index, 1);
  console.log(tasks);
  FillHtmlList()
};
