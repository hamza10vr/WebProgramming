const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

console.log(form, input, taskList);

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};

function addTask(task) {
  let taskValue = input.value;
  //   if (task) {
  //     taskValue = task.text;
  //   }

  task ? (taskValue = task.text) : task;
  console.log(taskValue);

  taskValue ? displayTask() : taskValue;

  function displayTask() {
    const newTask = document.createElement("li");

    newTask.innerHTML = taskValue;

    taskList.appendChild(newTask);
  }
}
