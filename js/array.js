// const friends = ['Poly', 'Mango', 'Kiwi', 'Ajax'];

// console.log(friends[2]);
// console.log(friends.length);

// friends[1] = 'trtrt';

// console.log(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// const bestFriends = friends;

// console.log(bestFriends);

// bestFriends[1] = 'Mango';

// console.log(friends);

// const join = friends.join(', ');

// console.log(join);

// ! Посчитать общую сумму покупок в корзине

// const cart = [54, 55, 78, 34, 64, 123, 5];

// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// ! Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18];

// let total = 0;

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }

//   total += number;
// }

// console.log('Total even', total);

// ! Напиши скрипт поиска логина
// ! Если логина нет вывести сообщение "Пользователь найден"
// ! Если нашли, то сообщение "Пользователь найден"

// const logins = ['mango', 'kiwi', 'poly1234', 'ajax545'];

// const loginToFind = 'kiwi';

// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// let message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// ! Напиши скрипт поиска самого маленького числа в масиве, при условии что числа не повторяются

// const numbers = [51, 18, 1, 24, 7, 85, 19];

// let minNumber = numbers[0];

// for (const number of numbers) {
//   if (minNumber > number) {
//     minNumber = number;
//   }
// }

// console.log(minNumber);

// ! Напиши скрипт который заменяет регистр каждого символа в строке на противоположный

// const string = 'JavaScript';

// const array = string.split('');

// let invertedString = '';

// for (const item of array) {
//   console.log(item);
//   invertedString += item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();
// }

// console.log(invertedString);

// ! Делаем slug в URL из названия статьи, заголовок состоит только из букв пробелов
// ! сделать строку маленькую разделенную тире

// const title = 'Top 10 benefits of React framework';

// const slugTitle = title.toLowerCase().split(' ').join('-');

// console.log(slugTitle);

// ! Напиши скрипт который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const array = array1.concat(array2);

// console.log(array);

// let total = 0;

// for (const value of array) {
//   total += value;
// }

// console.log(total);
