import { populate } from ".";
export const dragObjects = (list) => {
  let dragged;

  document.addEventListener("drag", function(event) {
    event.target.classList.add('invisible');
  }, false);
  
  document.addEventListener("dragstart", function(event) {
    dragged = event.target;
    event.target.classList.add('dragging');
  }, false);
  
  document.addEventListener("dragend", function(event) {
    event.target.classList.remove('dragging');
    event.target.classList.remove('invisible');
  }, false);

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  }, false);
  
  document.addEventListener("dragenter", function(event) {
    for(let i = 0; i< event.target.classList.length; i++){
      if (event.target.classList[i] == "dropzone") {
        event.target.classList.add('draggingOver');
      } else if (event.target.classList[i] == 'dropzone2') {
        event.target.parentNode.classList.add('draggingOver')
      }
    }
  }, false);
  
  document.addEventListener("dragleave", function(event) {
    for(let i = 0; i< event.target.classList.length; i++){
      if (event.target.classList[i] == "dropzone") {
        event.target.classList.remove('draggingOver');
      } else if (event.target.classList[i] == 'dropzone2') {
        event.target.parentNode.classList.remove('draggingOver')
      }
    }
  }, false);
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    for(let i = 0; i< event.target.classList.length; i++){
      if (event.target.classList[i] == 'dropzone2') {
        let placeholder = list[dragged.children[0].id].index;
        list[dragged.children[0].id].index = list[event.target.parentNode.children[0].id].index;
        list[event.target.parentNode.children[0].id].index = placeholder;
      }
    }
    populate();
  }, false);
};
