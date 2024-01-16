// TODO Функция doMath (a,b, callback)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   return result;
// };

// const add = function (a, b) {
//   return a + b;
// };

// console.log(doMath(456, 235446, add));

// TODO Отложенный вызов: регистрация событий

// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', () => {
//   console.log('Click Btn');
// });

// TODO Отложенный вызов: геолокация

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// TODO Отложенный вызов:интервалы

// console.log('Лог перед таймаутом');

// setTimeout(() => {
//   console.log('Сработает через 5 сек после лога после таймаута');
// }, 5000);

// console.log('Лог после таймаутом');

// TODO Отложенный вызов:http-запросы

// ! Замыкание

const makeChef = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
  };

  return makeDish;
};

const mango = makeChef('mango');

mango('голубці');

const rimma = makeChef('Рімма');

rimma('плов');
