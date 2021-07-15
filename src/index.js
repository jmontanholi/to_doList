import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import checkboxesEvent, { list } from './_checkboxFunctions.js';
import dragObjects from './_dragFunctions.js';
import { populate } from './_addRemoveFunctions.js';

populate();
dragObjects();
checkboxesEvent(list);