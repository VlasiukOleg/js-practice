const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const backdrop = document.querySelector('.backdrop');

const onModalToogle = () => {
  window.addEventListener('keydown', onEscClickCloseModal);
  backdrop.classList.toggle('backdrop-open');
};

const onBackdropClose = e => {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target === e.currentTarget) {
    onModalToogle();
  }
};

const onEscClickCloseModal = e => {
  console.log(e.code);

  if (e.code === 'Escape') {
    onModalToogle();
  }
};

btnOpenModal.addEventListener('click', onModalToogle);
btnCloseModal.addEventListener('click', onModalToogle);
backdrop.addEventListener('click', onBackdropClose);
