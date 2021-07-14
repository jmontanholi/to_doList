import { saveLocalstorage } from './index.js';

const checkboxes = document.getElementsByClassName('checkbox');

export const checkboxesEvent = (list) => {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
      if (list[i].completed == true) {
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
