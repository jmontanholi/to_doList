import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const div = document.getElementById('itemsDiv');
const list = [
  {
    description: 'take the trash out',
    completed: true,
    index: 0,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 1,
  },
  {
    description: 'take the trash out',
    completed: true,
    index: 2,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 3,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 3,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 4,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 6,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 7,
  },
  {
    description: 'take the trash out',
    completed: false,
    index: 8,
  },
];

const populate = () => {
  list.forEach((element) => {
    const li = document.createElement('li');
    if (element.completed) {
      li.innerHTML = `
        <input class="checkbox" type="checkbox" id="${element.index}" checked>
        <label class="description" for="${element.index}">${element.description}</label>
        <p><i class="bi bi-three-dots-vertical"></i></p>
      `;
    } else {
      li.innerHTML = `
        <input class="checkbox" type="checkbox" id="${element.index}">
        <label class="description" for="${element.index}">${element.description}</label>
        <p><i class="bi bi-three-dots-vertical"></i></p>
      `;
    }
    li.classList.add('d-flex', 'justify-content-around', 'align-content-center');
    div.appendChild(li);
  });
};

populate();