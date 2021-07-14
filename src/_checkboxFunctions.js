import { saveLocalstorage } from './_dragFunctions.js';

const checkboxes = document.getElementsByClassName('checkbox');

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
