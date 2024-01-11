// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

//! Task1

// const employee = 5;
// const salary = Math.random() * (500 - 50) + 50;
// let totalSalary = 0;

// for (let i = 1; i <= employee; i += 1) {
//   console.log(i);
//   totalSalary += salary;
// }

// console.log(Number(totalSalary.toFixed(2)));

//! Task 2

// Напиши сумму всех четных цифр которые входят в промежуток

const min = 5;
const max = 10;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total);
