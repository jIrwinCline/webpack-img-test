import './css/styles.css';
import 'bootstrap';
import $ from 'jquery';
import { randomize } from './memory.js';
import quokka from './quokka.jpg';

function component() {
  const element = document.getElementById('thing');

  element.src = quokka;

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // Add the image to our existing div.

  // quokka.src = quokka;

  // element.appendChild(quokka);

  // return element;
}

$(document).ready(function () {
  var random16 = randomize();

  // displayCards(random16);
});
