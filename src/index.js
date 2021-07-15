/* eslint-disable import/no-named-default */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { default as checkboxesEvent, list } from './_checkboxFunctions.js';
import { default as dragObjects } from './_dragFunctions.js';
import { populate } from './_addRemoveFunctions.js';

populate();
dragObjects();
checkboxesEvent(list);