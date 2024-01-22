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

// const btnList = document.querySelector('.btn-list');

// const actions = document.querySelectorAll('.btn-list button');

// console.log(actions[1].dataset.action);

// ! ClassList

// const siteNavLink = document.querySelector('.site-nav-link');

// console.log(siteNavLink);

// const currentPage = '/home';

// siteNavLink.classList.add('new-class');
// siteNavLink.classList.remove('new-class');
// console.log(siteNavLink.classList.contains('new-class'));

// const currentLink = document.querySelector(`.site-nav-link[href='${currentPage}']`);

// console.log(currentLink);

// currentLink.classList.add('site-nav-link--current');

// ! Создание елементов

// ? Добавляем пункт меню

// const siteNavItem = document.createElement('li');
// siteNavItem.classList.add('site-nav-item');

// console.log(siteNavItem);

// const siteNavLink = document.createElement('a');
// siteNavLink.classList.add('site-nav-link');
// siteNavLink.textContent = 'LogIn';
// siteNavLink.href = '/login';

// console.log(siteNavLink);

// const siteNavList = document.querySelector('.site-nav-list');

// siteNavItem.appendChild(siteNavLink);
// siteNavList.appendChild(siteNavItem);

// ! Создаем коллекцию элементов колорпикер

// const colorPickerEl = document.querySelector('.js-color-picker');

// const colorPickerOptions = [
//   { label: 'Red', color: '#FF0000' },
//   { label: 'Green', color: '#00FF00' },
//   { label: 'Blue', color: '#0000FF' },
//   { label: 'Yellow', color: '#FFFF00' },
//   { label: 'Purple', color: '#800080' },
// ];

// const btnElements = [];

// colorPickerOptions.map(option => {
//   const element = document.createElement('button');
//   element.type = 'button';
//   element.textContent = option.label;
//   element.style.backgroundColor = option.color;

//   return btnElements.push(element);
// });

// console.log(btnElements);

// colorPickerEl.append(...btnElements);

// ? Напишемо функцію для створення розмітки

// const makeColorPickerMarkUp = options => {
//   return options.map(option => {
//     const btnEl = document.createElement('button');
//     btnEl.type = 'button';
//     btnEl.textContent = option.label;
//     btnEl.style.backgroundColor = option.color;

//     return btnEl;
//   });
// };

// const elements = makeColorPickerMarkUp(colorPickerOptions);

// colorPickerEl.append(...elements);
