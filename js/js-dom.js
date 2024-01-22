// ! Пошук елементів

// const list = document.querySelector('.list');

// console.log(list);

// const firstListItem = (list.firstElementChild.textContent = 'New First Item');

// console.log(firstListItem);

// const children = list.children;

// console.log(children);

// console.log(list.firstElementChild.parentElement);

// ! Властивості елемента

// const imageEl = document.querySelector('.image');
// const btnEl = document.querySelector('.btn');

// console.log(btnEl);

// console.log(imageEl.src);

// btnEl.addEventListener('click', () => {
//   console.log('Click');
//   imageEl.src =
//     imageEl.src === 'https://picsum.photos/id/237/200/300'
//       ? 'https://picsum.photos/id/9/320/240'
//       : 'https://picsum.photos/id/237/200/300';
// });

// !Дата атрибуты

const btnList = document.querySelector('.btn-list');

const actions = document.querySelectorAll('.btn-list button');

console.log(actions[1].dataset.action);
