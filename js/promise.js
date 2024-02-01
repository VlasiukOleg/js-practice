// const isSuccess = Math.random() > 0.45;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise.then(value => console.log(value)).catch(error => console.log(error));

// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => console.log(x))
//   .finally(console.log('any case'));

// ! Промисификация функций

// const DELAY = 2000;

// const makeDish = dish => {
//   const isMakeDish = Math.random() > 0.5;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isMakeDish) {
//         resolve(`Вот Ваш ${dish}`);
//       } else {
//         reject('Упс закончились продукты');
//       }
//     }, DELAY);
//   });
// };

// makeDish('пирожок').then(onMakeDishSuccess).catch(onMakeDishError);

// function onMakeDishSuccess(result) {
//   console.log('onMakeDishSuccess');
//   console.log(result);
// }

// function onMakeDishError(error) {
//   console.log(' onMakeDishError');
//   console.log(error);
// }

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(r => r.json())
  .then(result => console.log(result.results[1]));
