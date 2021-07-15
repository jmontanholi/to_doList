// eslint-disable-next-line import/no-named-default
import { default as checkboxesEvent, list, saveLocalstorage } from './_checkboxFunctions.js';

const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');
const li = document.getElementsByClassName('dropzone');
class Task {
  constructor(description, completed = false, index = (list.length)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTask() {
    list.push(this);
  }
}

export default function editItem() {
  for (let i = 0; i < li.length; i += 1) {
    li[i].children[1].addEventListener('dblclick', () => {
      const newInput = document.createElement('input');
      const placeholder = li[i].children[1];
      li[i].removeChild(li[i].children[1]);
      newInput.placeholder = placeholder.innerHTML;
      li[i].insertBefore(newInput, li[i].children[1]);

      newInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          if (newInput.value.trim() === '') {
            newInput.classList.add('border', 'border-danger');
          } else {
            list[li[i].children[0].id].description = newInput.value;
            li[i].removeChild(li[i].children[1]);
            placeholder.innerHTML = `${newInput.value}`;
            li[i].insertBefore(placeholder, li[i].children[1]);
            saveLocalstorage();
          }
        }
      });
    });
  }
}

const div = document.getElementById('itemsDiv');
export const populate = () => {
  div.innerHTML = '';
  const sortedList = list.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
    return 0;
  });
  sortedList.forEach((element) => {
    const li = document.createElement('li');
    li.draggable = true;
    li.classList.add('dropzone');
    if (element.completed === true) {
      li.classList.add('completed');
    }
    if (element.completed) {
      li.innerHTML = `
        <input class="checkbox dropzone2" type="checkbox" id="${element.index}" checked>
        <p class="description dropzone2">${element.description}</p>
        <p class="dots dropzone2"><i class="bi bi-three-dots-vertical"></i></p>
      `;
    } else {
      li.innerHTML = `
        <input class="checkbox dropzone2" type="checkbox" id="${element.index}">
        <p class="description dropzone2">${element.description}</p>
        <p class="dots dropzone2"><i class="bi bi-three-dots-vertical"></i></p>
      `;
    }
    li.classList.add('d-flex', 'justify-content-around', 'align-content-center');
    div.appendChild(li);
  });
  editItem();
  saveLocalstorage();
};

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
      checkboxesEvent(list);
      editItem();
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
    checkboxesEvent(list);
    editItem();
    textInput.value = '';
  }
});
