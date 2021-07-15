const checkboxes = document.getElementsByClassName('checkbox');
const clearAll = document.getElementById('clearAll');
const div = document.getElementById('itemsDiv');
// eslint-disable-next-line import/no-mutable-exports
export let list = [];

if (localStorage.getItem('list')) {
  const getList = JSON.parse(localStorage.getItem('list'));
  list = getList;
}

export const saveLocalstorage = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

export default function checkboxesEvent(list) {
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (list[i].completed === true) {
        list[i].completed = false;
        checkboxes[i].parentNode.classList.remove('completed');
        saveLocalstorage();
      } else {
        list[i].completed = true;
        checkboxes[i].parentNode.classList.add('completed');
        saveLocalstorage();
      }
    });
  }
}

clearAll.addEventListener('click', () => {
  const filtered = list.filter((element) => {
    if (element.completed === false) {
      return true;
    }
    return false;
  });
  list = filtered;
  // eslint-disable-next-line no-alert
  if (window.confirm('Are you sure?')) {
    if (list.length === 0) {
      div.innerHTML = '';
    } else {
      div.innerHTML = '';
      list.forEach((element) => {
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
            <p class="dots dropzone2 threeDots"><i class="bi bi-three-dots-vertical"></i></p>
            <p class="dots dropzone2 d-none removeBtn"><i class="bi bi-trash"></i></p>
          `;
        } else {
          li.innerHTML = `
            <input class="checkbox dropzone2" type="checkbox" id="${element.index}">
            <p class="description dropzone2">${element.description}</p>
            <p class="dots dropzone2 threeDots"><i class="bi bi-three-dots-vertical"></i></p>
            <p class="dots dropzone2 d-none removeBtn"><i class="bi bi-trash"></i></p>
          `;
        }
        li.classList.add('d-flex', 'justify-content-around', 'align-content-center');
        div.appendChild(li);
      });
    }
  }
  checkboxesEvent(list);
  saveLocalstorage();
});