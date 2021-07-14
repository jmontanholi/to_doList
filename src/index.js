import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './_dragFunctions.js'
import { checkboxesEvent } from './_checkboxFunctions';
import { dragObjects } from './_dragFunctions.js';

const div = document.getElementById('itemsDiv');
let list = [
  {
    description: 'This is the first test',
    completed: true,
    index: 0,
  },
  {
    description: 'This is the second test',
    completed: false,
    index: 1,
  },
  {
    description: 'This is the third test',
    completed: true,
    index: 2,
  },
  {
    description: 'This is the fourth test',
    completed: false,
    index: 3,
  },
];

if (localStorage.getItem('list')) {
  const getList = JSON.parse(localStorage.getItem('list'));
  list = getList;
}

export const saveLocalstorage = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

export const populate = () => {
  div.innerHTML = '';
  let sortedList = list.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1
    }
  });
  sortedList.forEach((element) => {
    const li = document.createElement('li');
    li.draggable = true;
    li.classList.add('dropzone');
    if (element.completed == true) {
      li.classList.add('completed');
    }
    if (element.completed) {
      li.innerHTML = `
        <input class="checkbox dropzone2" type="checkbox" id="${element.index}" checked>
        <label class="description dropzone2" for="${element.index}">${element.description}</label>
        <p class="dots dropzone2"><i class="bi bi-three-dots-vertical"></i></p>
      `;
    } else {
      li.innerHTML = `
        <input class="checkbox dropzone2" type="checkbox" id="${element.index}">
        <label class="description dropzone2" for="${element.index}">${element.description}</label>
        <p class="dots dropzone2"><i class="bi bi-three-dots-vertical"></i></p>
      `;
    }
    li.classList.add('d-flex', 'justify-content-around', 'align-content-center');
    div.appendChild(li);
  });
  saveLocalstorage()
};

populate();
dragObjects(list);
checkboxesEvent(list);