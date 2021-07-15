const checkboxes = document.getElementsByClassName('checkbox');
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
