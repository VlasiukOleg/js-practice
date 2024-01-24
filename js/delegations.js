const tagsContainer = document.querySelector('.js-container');
const tagsButton = document.querySelector('.tags-btn');

tagsContainer.addEventListener('click', onTagsBtnClick);

let selectedTags = new Set();

function onTagsBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target.nodeName);

  const btn = e.target;

  console.log(btn.dataset.value);

  e.target.classList.toggle('tags-btn--current');

  selectedTags.add(btn.dataset.value);

  console.log([...selectedTags]);
}
