// class User {}

// const mango = new User();

// console.log(mango);

// ! Класс это новый способ записывать функцию конструктор
// ! Все что идет на экземпляр "живет" в конструкторе, dвсе остальное на проттип
// !Приватное свойство достпупно в методах самого класса

class Car1 {
  #test = 'test';

  constructor({ brand, model, price } = {}) {
    console.log('Виконується конструктор');
    this.price = price;
    this.brand = brand;
    this.model = model;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  get priceCar() {
    return this.price;
  }

  set priceCar(newPrice) {
    return (this.price = newPrice);
  }
}

const carInstance = new Car1({
  brand: 'Audi',
  model: 'A4',
  price: 15000,
});

carInstance.changePrice(15600);

console.log(carInstance);

console.log(carInstance.priceCar);

carInstance.priceCar = 16200;

console.log(carInstance);
