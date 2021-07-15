// eslint-disable-next-line import/no-named-default
import { default as checkboxesEvent, saveLocalstorage, list } from './_checkboxFunctions.js';

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
  saveLocalstorage();
};

export default function dragObjects() {
  let dragged;

  document.addEventListener('drag', (event) => {
    event.target.classList.add('invisible');
  }, false);

  document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.classList.add('dragging');
  }, false);

  document.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
    event.target.classList.remove('invisible');
  }, false);

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  }, false);

  document.addEventListener('dragenter', (event) => {
    for (let i = 0; i < event.target.classList.length; i += 1) {
      if (event.target.classList[i] === 'dropzone') {
        event.target.classList.add('draggingOver');
      } else if (event.target.classList[i] === 'dropzone2') {
        event.target.parentNode.classList.add('draggingOver');
      }
    }
  }, false);

  document.addEventListener('dragleave', (event) => {
    for (let i = 0; i < event.target.classList.length; i += 1) {
      if (event.target.classList[i] === 'dropzone') {
        event.target.classList.remove('draggingOver');
      } else if (event.target.classList[i] === 'dropzone2') {
        event.target.parentNode.classList.remove('draggingOver');
      }
    }
  }, false);

  document.addEventListener('drop', (event) => {
    event.preventDefault();
    for (let i = 0; i < event.target.classList.length; i += 1) {
      if (event.target.classList[i] === 'dropzone2') {
        const placeholder = list[dragged.children[0].id].index;
        list[dragged.children[0].id].index = list[event.target.parentNode.children[0].id].index;
        list[event.target.parentNode.children[0].id].index = placeholder;
        dragged.children[0].id = list[dragged.children[0].id].index;
        event.target.parentNode.children[0].id = list[event.target.parentNode.children[0].id].index;
      }
    }
    populate();
    checkboxesEvent(list);
  }, false);
}
