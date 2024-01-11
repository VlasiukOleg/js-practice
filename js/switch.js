const star = 8;
let price;

switch (star) {
  case 1:
    price = 20;
    break;
  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 80;
    break;
  case 5:
    price = 120;
    break;

  default:
    price = 'There are no such number of stars';
}

console.log(price);

// Напиши скрипт выбора опции доставки товара
// Опция хранится в переменной option - 1 - Самовівоз, 2 -Курьер, 3 - Почта

// В переменную messagge записать сообщение в зависимости от выбора опций

const option = 1;
let message;

switch (option) {
  case 1:
    message = 'You will get you order tomorrow after 18.00';
    break;

  case 2:
    message = 'The courier will deliver the goods tomorrow from 9.00 to 18.00';
    break;
  case 3:
    message = 'The package will be sent to you today';
    break;
  default:
    message = 'Our manager will call you back';
}

console.log(message);
