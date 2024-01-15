// const fn = function (x, y) {
//   return x * y;
// };

// console.log(fn(5, 4));

// ! Напиши функцію calculateTotalPrice(items)

// !которая принимает массив (чисел) и возвращает их сумму

// const calculateTotalPrice = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));

// ! Напиши функцию logItems для перебора и логирования массива

// const logItems = function (items) {
//   for (const item of items) {
//     console.table(item);
//   }
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4]);

// ! Напиши функцию findLogin(allLogins, login) для поиска логина
// !Если логина нет вывести сообщение

// const logins = ['mango', 'kiwi', 'poly1234', 'ajax545'];

// const loginToFind = 'kiwi';

// const findLogin = function (allLogins, login) {
//   return allLogins.includes(login)
//     ? `Пользователь ${login} найден`
//     : `Пользователь ${login} не найден`;
// };

// console.log(findLogin(logins, loginToFind));
// console.log(findLogin(logins, 'rgfjvfh45'));

// ! Напиши функцию findSmalestNumber(numbers) поиска самого маленького числа в масиве, при условии что числа не повторяются

// const numbers = [51, 18, 1, 24, 7, 85, 19];

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([51, 18, 1, 24, 7, 85, 19]));
// console.log(findSmallestNumber([-1, 6, 4, 143, 9, 500, 0]));

// ! Напиши функцию changeCase(string) который заменяет регистр каждого символа в строке на противоположный

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (let letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();
//     invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeCase('rtrKFHSett'));
// console.log(changeCase('aJrHtrtHHH'));

// ! Делаем функцию slugify(string) в URL из названия статьи, заголовок состоит только из букв пробелов
// ! сделать строку маленькую разделенную тире

// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Top 10 benefits of React Framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));

// !Arguments

const fnA = function () {
  console.log(Array.from(arguments));
};

fnA(1, 2, 3);
fnA(1, 2, 3, 4, 5);

const fnB = function (...numbers) {
  console.log(numbers);

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
};

fnB(1, 2, 3);
console.log(fnB(1, 2, 3, 4, 5));
