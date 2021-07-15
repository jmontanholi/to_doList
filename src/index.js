import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// eslint-disable-next-line import/no-named-default
import { default as checkboxesEvent, list } from './_checkboxFunctions.js';
// eslint-disable-next-line import/no-named-default
import { default as dragObjects, populate } from './_dragFunctions.js';
import './_addRemoveFunctions.js';

populate();
dragObjects();
checkboxesEvent(list);