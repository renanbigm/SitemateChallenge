import { addListenerToClearSelecteds } from "./src/Buttons.mjs";
import { buildAllTasks, createTasksList } from "./src/TasksList.mjs";

const form = document.querySelector('#task-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const textInput = document.querySelector('.add-task');
  if (!textInput.value) return alert("Task needs to be described.");

  createTasksList(textInput.value);
  textInput.value = '';
});


window.onload = () => {
  buildAllTasks();
  addListenerToClearSelecteds();
}