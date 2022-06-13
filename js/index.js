
// 'use strict'
// function executeForEach(array, callback) {
//     for(const item of array) {
//         callback(item)
//     }
// }

// executeForEach([1, 2, 3, 4, 5], function multiply(num) {console.log(num*2)})

// function executeForEach(array, callback) {

//     for(const item of array) {
//         console.log(item*2)
//     }
// }

// function executeForEach(array, callback) {
//     for(const item of array) {
//         console.log(item*10)
//     }
// }

// function executeForEach(array, callback) {
//     for(const item of array) {
//         console.log(item+2)
//     }
// }

// function executeForEach(array, callback) {
//     for(const item of array) {
//         callback(item)
//     }
// }

// function multiply(num) {
//     console.log(num*2)
// }

// function add(num) {
//     console.log(num+2)
// }

// // executeForEach([1, 2, 3, 4, 5], multiply)
// executeForEach([1, 2, 3, 4, 5], add)

// function mathOperation(array) {
//   if (array[0] > array[1]) {
//     const result = array[0] - array[1];
//     console.log(result);
//   } else {
//     const result = array[0] + array[1];
//     console.log(result);
//   }
// }

// mathOperation([5, 7]);

// function subtraction(num1, num2) {
//   const result = num1 - num2;
//   console.log(result);
// }

// function add(num1, num2) {
//   const result = num1 + num2;
//   console.log(result);
// }

// function divide(num1, num2) {
//     const result = num1 / num2;
//     console.log(result);
// }

// function multiply(num1, num2) {
//     const result = num1 * num2;
//     console.log(result);
// }

// function mathOperation(array, callback1, callback2) {
//   if (array[0] > array[1]) {
//     callback1(array[0], array[1]);
//   } else {
//     callback2(array[0], array[1]);
//   }
// }

// mathOperation([5, 7], subtraction, add) // 12
// mathOperation([10, 7], subtraction, add) // 3

// mathOperation([5, 7], divide, multiply) // 35
// mathOperation([10, 7], divide, multiply) // 1.4285714285714286

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// numbers.forEach((number, index) => console.log(`Індекс ${index}, значення ${number}`));

// const array = []
// numbers.forEach(function (number) {
//     array.push(number * 2)
// });
// console.log(array)

// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// const classicAdd1 = function (a, b, c) {
//   return a + b + c;
// };

// const classicAdd2 = (a, b, c) => {
//   return a + b + c;
// };

// const revert = (a) => {
//   return !a;
// };

// console.log(revert(true));

// const logger = () => {
//   console.log('Hello!')
// };

// logger()

// const add = (a, b, c) => {
//     const sum = a + b + c
//     return sum
// }

// const add = (a, b, c) => {
//    return a + b + c
// }

// const add = (a, b, c) => a + b + c;

// console.log(add(10, 20, 30))

// function executeForEach(array, callback) {
//     for(const item of array) {
//         callback(item)
//     }
// }

// executeForEach([1, 2, 3, 4, 5], (num) => console.log(num*2))

// (() => {
//   console.log(1 + 2 + 3);
// })()

// console.log(1 + 2 + 3);
// function log() {
//     console.log(arguments)
// }

// const log = (...args) => {
//   console.log(args);
// };

// log(1, 2, 3, 4, 5, 6, 7);

// function mathOperation(array, callback1, callback2) {
//   if (array[0] > array[1]) {
//     callback1(array[0], array[1]);
//   } else {
//     callback2(array[0], array[1]);
//   }
// }

// // Так НЕ робити
// mathOperation([5, 7], (num1, num2) => console.log(num1 - num2), (num1, num2) => console.log(num1 + num2)) // 12
// mathOperation([10, 7], (num1, num2) => console.log(num1 - num2), (num1, num2) => console.log(num1 + num2)) // 3

// mathOperation([5, 7], (num1, num2) => console.log(num1 / num2), (num1, num2) => console.log(num1 * num2)) // 35
// mathOperation([10, 7], (num1, num2) => console.log(num1 / num2), (num1, num2) => console.log(num1 * num2)) // 1.4285714285714286

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// // console.log(dog);

// dog.name = "Манго";
// // dog.legs = 3;

// console.log(dog);

// const superDog = Object.create(dog)
// superDog.eyes = 2
// superDog.eyeColor = 'green'
// // console.log(superDog)

// // console.log(superDog.name)
// // console.log(superDog.legs)
// // console.log(superDog.eyes)

// for (const key in superDog) {
//  if (!superDog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// console.log(Object.keys(superDog))

// const student = {
//   name: "John",
//   email: "user@gmail.com",
//   homeworkResults: [],
//   getName() {
//     console.log(this.name);
//   },
//   getEmail() {
//     console.log(this.email);
//   },
//   getHMResults() {
//     console.log(this.homeworkResults);
//   },
//   addHMResults(topic, success) {
//     const subject = { topic, success };
//     this.homeworkResults.push(subject);
//   },
// };

// const Student = function (name, email) {
//     const homeworkResults = [];
//     this.getName = function () {
//     console.log(name)
//     }
//     this.getEmail = function (){
//     console.log(email);
//   }
//     this.getHMResults = function() {
//     console.log(homeworkResults);
//   }
//     this.addHMResults = function(topic, success) {
//     const subject = { topic, success };
//     homeworkResults.push(subject);
//   }
// };

// const john = new Student('John', 'john@ukr.net')
// const anna = new Student('Anna', 'anna@ukr.net')
// john.getName()
// anna.getEmail()

// class User {
//   #email;
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); //

// console.log(mango.getEmail());
// mango.changeEmail('newmango@ukr.net')

// console.log(mango.getEmail());

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// // mango.email = "mango@supermail.com";
// // console.log(mango.email); // mango@supermail.com\

// class User {
//   email; // без оголошення - переповнення стеку
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// // console.log(editor.email); // 'mango@mail.com'

// class User {
//   // email;
//   constructor(email) {
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// // console.log(editor.email); // 'mango@mail.com'

const foo = () => console.log(this)

foo()

// const foo = () => console.log(this)
// const obj = {
//   logCtx: foo
// };

// obj.logCtx()