const inputValue = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');
const btnReset = document.querySelector('.btn-clear');
const totalOutput = document.querySelector('.totalOutput');

let total = 0;

btnAdd.addEventListener('click', () => {
  const value = Number(inputValue.value);

  total += value;

  totalOutput.textContent = total;
});

btnReset.addEventListener('click', () => {
  total = 0;

  totalOutput.textContent = total;
});
