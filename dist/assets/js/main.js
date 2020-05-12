"use strict";

function onButtonClisk(e) {
  e.preventDefault();
  alert('Some action...');
}

document.querySelector('#formBtn').addEventListener('click', onButtonClisk);