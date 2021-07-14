const checkboxes = document.getElementsByClassName('checkbox');
import './index.js';

export const checkboxesEvent = (list) => {
  for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
      if (list[i].completed == true) {
        list[i].completed = false
      } else {
        list[i].completed = true
      }
    })
  }
};