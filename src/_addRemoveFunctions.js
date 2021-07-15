import { list } from './_checkboxFunctions.js';
import { populate } from './_dragFunctions.js';

const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');

class Task {
  constructor(description, completed = false, index = (list.length + 1)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask() {
    list.push(this);
  }
}

textInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (textInput.value.trim() === '') {
      textInput.placeholder = 'Please insert a valid value';
      textInput.classList.add('border', 'border-danger');
      textInput.addEventListener('change', () => {
        if (textInput.value.trim() !== '') {
          textInput.classList.remove('border', 'border-danger');
        }
      });
    } else {
      const task = new Task(textInput.value);
      task.addTask();
      populate();
      textInput.value = '';
    }
  }
});

addBtn.addEventListener('click', () => {
  if (textInput.value.trim() === '') {
    textInput.placeholder = 'Please insert a valid value';
    textInput.classList.add('border', 'border-danger');
    textInput.addEventListener('change', () => {
      if (textInput.value.trim() !== '') {
        textInput.classList.remove('border', 'border-danger');
      }
    });
  } else {
    const task = new Task(textInput.value);
    task.addTask();
    populate();
    textInput.value = '';
  }
});