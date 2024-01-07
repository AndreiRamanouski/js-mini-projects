'use strict';

let text = document.querySelector('.hidden');

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModel = document.querySelectorAll('.show-modal');

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModel.forEach(btn => btn.addEventListener('click', openModel));

btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModel();
});
