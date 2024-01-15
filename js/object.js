// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist.name);
// console.log(playlist['name']);

// for (const key in playlist) {
//   if (Object.hasOwnProperty.call(playlist, key)) {
//     const element = playlist[key];
//     console.log(element);
//   }
// }

// const propertyName = 'tracks';

// console.log(playlist[propertyName]);

// const firstName = 'Oleg';
// const age = 40;

// const person = {
//   firstName,
//   age,
// };

// console.log(person);

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// const { name, rating, tracks, trackCount } = playlist;

// console.log(name);

// const a = { x: 1, y: 2 };

// const b = a;

// console.log(b === a);

//! Методы объекта

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,

//   getName() {
//     return this.name;
//   },

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//     this.trackCount = this.tracks.length;
//   },
// };

// console.log(playlist.getName());
// playlist.changeName('My new Playlist');
// playlist.addTrack('track-4');
// playlist.addTrack('track-5');
// console.log(playlist);

// ! Перебор массива

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// // const keys = Object.keys(feedback);

// // console.log(keys);

// // for (const key of keys) {
// //   totalFeedback += feedback[key];
// // }

// const values = Object.values(feedback);

// for (const value of values) {
//   totalFeedback += value;
// }

// console.log(totalFeedback);

// ! Массив объектов

const friends = [
  { name: 'Mango', online: true },
  { name: 'Kiwi', online: false },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

// for (const friend of friends) {
//   console.log(friend);
// }

// ! Ищем друга по имени

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return `У Вас є друг ${name}`;
//     }
//   }

//   return `У Вас немає друга ${name}`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// ! Получаем имена всех друзей

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// ! ПОлучаем имена всех друзей которые онлайн

// const getOnlineFriends = function (allFriends) {
//   const friendsOnline = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsOnline.push(friend);
//     }
//   }

//   return friendsOnline;
// };

// console.log(getOnlineFriends(friends));

// const x = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 100,
// };

// console.log(Object.values(x).length);

// ! Работаем с коллекцией товаров в корзине

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const { items } = this;
    for (const item of items) {
      const indexToDelete = items.indexOf(item);
      if (item.name === productName) {
        items.splice(indexToDelete, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      console.log(item.price);
      total += item.price;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'banana', price: 80 });
cart.add({ name: 'potato', price: 35 });
cart.add({ name: 'tomato', price: 100 });

cart.remove('potato');

// cart.clear();

console.log('Загальна сума покупок', cart.countTotalPrice());

console.log(cart.items);

// ! Операция spread ... распыление

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// console.log(numbers);

// const numbers = [...[1, 2, 3], 4, 5];

// console.log(numbers);

// ? Поиск самой маленькой или большой температуры (числа)

// const temps = [18, 14, 12, 21, 17, 19, 24];

// const minTemps = Math.min(...temps);

// console.log(minTemps);

// ? Сшиваем несколько массивов в один через concat() b spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTempsConcat = lastWeekTemps.concat(currentTemps, nextWeekTemps);

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTempsConcat);
// console.log(allTemps);

// ? Распыление объектов

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 2 };

// const c = Object.assign({}, a, b);

// console.log(c);

// const d = { ...a, ...b };

// console.log(d);

// ? Деструктуризация объектов

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// const { name, rating, tracks, trackCount } = playlist;

// console.log(name);

// ? Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// for (const key of entries) {
//   const [name, rating] = key;
//   console.log(name, rating);
// }

// ? Операция rest

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// const { name, rating, ...trackInfo } = playlist;

// console.log(trackInfo);

// ? Паттерн объект настроек

// const playlist = {
//   name: 'My playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// const showProfileInfo = function (userPlaylist) {
//   console.log(userPlaylist);
//   const { name, rating, tracks, trackCount } = userPlaylist;

//   console.log(name, rating, tracks, trackCount);
// };

// showProfileInfo(playlist);
