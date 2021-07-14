import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import checkboxesEvent from './_checkboxFunctions.js';
// eslint-disable-next-line import/no-named-default
import { default as dragObjects, populate, list } from './_dragFunctions.js';

populate();
dragObjects();
checkboxesEvent(list);