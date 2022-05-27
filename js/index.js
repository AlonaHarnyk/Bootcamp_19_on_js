// const string = "script";
// const first = string[0];
// // string[0] = "p";  // не працює
// console.log(string);

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[0]);
// clients[0] = "Kiwi";
// console.log(clients);

// const numberArray = [1, 3, 5, 7, 9, 10, 11, 12, 15];
// for (let i = 0; i < numberArray.length; i += 1) {
//   console.log(numberArray[i]);
// }

// for (const number of numberArray) {
//   console.log(number);
// }

// for (const number of numberArray) {
//   // console.log(number);
//   if (number === 0 || number === 10) {
//     console.log(true, number);
//     break;
//   }
// }

// const a = [0, 2];
// console.log(a[0] || a[1]);

// let a = 1;
// let b = a;
// console.log(b);
// a = 2;
// b = a;
// console.log(b);

// const array1 = [1, 2, 3];
// const array2 = array1;
// const array3 = array2;
// // console.log(array2);

// array1.push(5);
// // console.log(array1);
// // console.log(array2);
// array2.push(10);

// // console.log(array2);
// // console.log(array1);
// // console.log(array3);
// array3.push(20);
// // console.log(array1);
// // console.log(array2);
// const array4 = [7, 8, 9];
// array4.push(30);

// const array1 = [1, 2, 3];
// let array2 = array1;

// // console.log(array1);
// // console.log(array2);

// array2 = [8, 9, 10];
// array1.push(100);
// // array2 = array1;

// // console.log(array1);
// // console.log(array2);

// const array3 = array2;

// // console.log(array3);
// array1.push(300);

// console.log(array3);

// const word = "javascript";
// const message = "javascript is the best programming language";
// const array1 = word.split("");
// console.log(array1);
// const array2 = message.split("i");
// console.log(array2);

// const array3 = [3, 5, 7, 8, 9, 7, 6, 7, 5, 7, 3, 7];
// // const text = array3.join("");
// // console.log(text);
// // console.log(array3.indexOf(7));
// let counter = 0;
// for (const number of array3) {
//   if (number === 7) {
//     counter += 1;
//   }
// }
// console.log(counter);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", 6, 0];
// console.log(clients.includes("6")); // false

// const array1 = [1, 2, 3];
// // const var1 = array1.push(5);
// // console.log(var1);
// const var2 = array1.pop();
// console.log(array1);

// const array2 = [1, 2, 3, 4, 5];
// // const var3 = array2.slice(0, 2);
// // console.log(var3);

// const array3 = [6, 7, 8];
// const array5 = [9, 10];
// const number = 11;
// const letter = "2";

// const array4 = array2.concat(array3, array5, number, letter);

// console.log(array4);

// const a = [1, 2, 3, 4, 5];
// const c = a.slice();
// const b = c.splice(2, 2);
// console.log(c);

// const a = [1, 2, 3, 6, 7];
// const b = a.splice(3, 0, 4, 5);
// console.log(b); // []

// const a = [1, 2, 3, 6, 7];
// const b = a.splice(2, 2, 0, 0, 0, 0 ,10);
// console.log(b);

// function add(num1, num2, num3) {
//   console.log(num3);
//   //   const sum = num1 + num2;
//   //   return sum;
//   return num1 + num2;
// }

// add(1, 2); // 3
// // add(10, 47); // 57
// // add(100, 200); // 300

// function check(array, number) {
//   return array.includes(number);
// }

// console.log(check([1, 2, 3], 2));
// console.log(check(2, [1, 2, 3])); // error
// console.log(check([1, 2, 3], 2, "a", 5, 6, 8));

// function check(array, number) {
//   const result = array.includes(number);
//   return result;
// }

// // console.log(check([1, 2, 3], 2));

// function add(num1 = 0, num2 = 1, num3 = 0) {
//   const sum = num1 + num2 + num3;
//   console.log(sum);
//   return sum;
// }

// add();

// function add(num1 = 0, num2 = 1, num3 = 0) {
//   const sum = num1 + num2 + num3;
//   return sum;
// }

// const num2 = 10;

// console.log(add(5, num2));

// function add() {
//   let sum = 0;
//   console.log(arguments);
//   //   const b = arguments.includes(3);
//   //   console.log(b); // error
//   const array = Array.from(arguments);
//   console.log(array);
//   const c = array.includes(3);
//   console.log(c);
//   for (const num of array) {
//     sum += num;
//   }
//   //   console.log(sum);
//   return sum;
// }

// add(1, 2, 3, 4, 5, 6, 7);
// add(1, 2, 3);
// add(1, 4, 8, 6);

// function add(...args) {
//   console.log(args);
// }

// add(1, 2, 3, 4, 5, 6, 7);

// console.log(check([1, 2, 3], 3));

// function check(array, number) {
//   if (array[0] === number) {
//     return true;
//   }
//   if (array[1] === number) {
//     return true;
//   }
//   if (array[2] === number) {
//     return true;
//   }
//   return false;
// }

// console.log(check([1, 2, 3], 3));

// console.log(check([1, 2, 3], 3));
// const check = function (array, number) {
//   if (array[0] === number) {
//     return true;
//   }
//   if (array[1] === number) {
//     return true;
//   }
//   if (array[2] === number) {
//     return true;
//   }
//   return false;
// };

// console.log(check([1, 2, 3], 3));
// console.log(a);
// const a = 1;
// console.log(a);

// const a = 5;

// function log() {
//   //   const a = 6;
//   console.log(a);
// }

// // console.log(a);
// log();

// const a = 5;
// // console.log(a);
// function log() {
//   const a = 6;
//   console.log(a);
//   if (6 === 6) {
//     const a = 7;
//     // console.log(a);
//     if (5 > 4) {
//       const a = 8;
//       console.log(a);
//     }
//   }
// }

// console.log(a);
// // log();

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
//   bar();
// }

// function foo() {
//   console.log("foo");
//   baz();
// }

// foo();
// // bar();
// // baz();
// // foo();

// console.log(typeof foo);

// const user = {
//   name: "Ivan",
//   age: 20,
//   sex: "male",
//   hasJob: true,
//   hobbies: ["tourisrm", "music", "sport"],
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user.name);
// console.log(user["name"]);
// console.log(user.stats.likes);
// console.log(user.hobbies[0]);

// const userHobbies = user.hobbies;
// console.log(userHobbies);

// const a = "hasJob";
// console.log(user[a]);
// console.log(user.a);

// user.age = 21;
// console.log(user);
// user[a] = false;
// console.log(user);
// user.hobbies.pop();
// console.log(user);

// console.log(user.hasCar);
// user.hasCar = true;
// console.log(user);
// console.log(user.hasCar);

// const subject = "html";
// const isPassed = false;

// const course = {
//   subject: subject,
//   isPassed: isPassed,
// };

// const course = {
//   subject,
//   isPassed,
// };

// user.course = course;

// console.log(user);

// const a = "skills";

// user[a] = [];

// console.log(user);

// const array = ["stats", "likes", "followers", "comments", "posts"];
// const userData = {};
// // const a = array[0];
// // userData[a] = [];
// // console.log(userData);

// for (const item of array) {
//   userData[item] = [];
// }

// // for (let i = 0; i < array.length; i += 1) {
// //   userData[array[i]] = [];
// // }

// // userData["stats"] = [];
// // userData["likes"] = [];
// userData["followers"] = [];
// // userData["comments"] = [];
// // userData["posts"] = [];
// const a = ["Mike", "Anton", "Anna", "Olha", "Alona"];

// for (const name of a) {
//   userData.followers.push(name);
// }

// console.log(userData);

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

// // student.getName();
// student.addHMResults("HTML", true);
// // student.getHMResults();
// student.addHMResults("CSS", true);
// // student.getHMResults();
// student.addHMResults("JS", false);
// // student.getHMResults();
// console.log(student.homeworkResults[0].topic); // 'HTML';

// const results = student.homeworkResults;
// for (const item of results) {
//   console.log(item);
//   if (item.topic === "HTML") {
//     console.log(item.success);
//   }
// }

// const user = {
//   name: "Ivan",
//   age: 20,
//   sex: "male",
//   hasJob: true,
//   hobbies: ["tourisrm", "music", "sport"],
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const keys = Object.keys(user);
// console.log(keys);
// const values = Object.values(user);
// console.log(values);
// const entries = Object.entries(user);
// console.log(entries);

// const keys = Object.keys(student);
// console.log(keys);
// const values = Object.values(student);
// console.log(values);
// const entries = Object.entries(student);
// console.log(entries);

// for (const item of keys) {
//   console.log(item);
//   console.log(user[item]);
// }

// const user = {
//   name: "Ivan",
//   age: 20,
//   sex: "male",
//   hasJob: true,
//   hobbies: ["tourisrm", "music", "sport"],
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const keys = Object.keys(user);
// for (const item of keys) {
//   console.log(item);
//   console.log(user[item]);
// }

// for (const item in user) {
//   console.log(item);
//   console.log(user[item]);
// }

// const animal = {
//   legs: 4,
// };

// console.log(animal);

// const dog = Object.create(animal);
// console.log(dog);

// dog.eyes = 2;

// console.log(dog);

// console.log(animal.legs);
// console.log(dog.legs);
// console.log(dog.eyes);
// console.log(dog.hasOwnProperty("eyes")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// console.log(animal.hasOwnProperty("eyes")); // false
// // console.log(animal.eyes);
// console.log(animal.hasOwnProperty("legs")); // true

// for (const key in dog) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(dog[key]);
//   }
//   // Якщо це невласна властивість - нічого не робимо
// }

// const array1 = [1, 2, 3];
// const array2 = [...array1];
// const a = array2.splice(1, 2, 3, 5);
// // console.log(array1);
// // console.log(array2);
// const array3 = array1.concat(array2, "12345");
// console.log(array3);
// const array4 = [...array1, ...array2, "qwerty"];
// console.log(array4);

// const car1 = {
//   color: "red",
//   model: "sedan",
//   weight: 1500,
//   name: "Ford",
// };

// const car2 = {
//   color: "blue",
//   model: "sedan",
//   name: "Ford",
//   maxSpeed: 220,
// };

// const car3 = { ...car1, ...car2, transBox: "auto" };

// console.log(car3);

// const add = function () {
//   console.log(arguments);
//   const array = Array.from(arguments);
//   console.log(array);
//   let sum = 0;
//   for (const num of array) {
//     sum += num;
//   }
//   return sum;
// };

// const add = function (...array) {
//   // console.log(arguments);
//   // const array = Array.from(arguments);
//   console.log(array);
//   let sum = 0;
//   for (const num of array) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(add(1, 4, 7, 4, 9));

// const add = function (...array) {
//   console.log(array);
//   const lastEl = array[array.length - 1];
//   // console.log(lastEl);
//   const num = array.pop();
//   console.log(array);
//   if (array.includes(lastEl)) {
//     return true;
//   } else {
//     return false;
//   }
//   return array.includes(num);
// };

// const add = function (num1, ...array) {
//   console.log(num1);
//   console.log(array);
//   return array.includes(num1)
// };

// console.log(add(1, 1, 7, 4, 7));

// const add = function (a, b, ...args) {
//   console.log(a);
//   console.log(b);
//   console.log(args);
// };

// console.log(add(1, 5, 7, 4, 7, 4, 3));

// const car1 = {
//   color: "red",
//   model: "sedan",
//   weight: 1500,
//   name: "Ford",
// };

// const car2 = {
//   color: "red",
//   model: "sedan",
//   weight: 1500,
//   name: "Ford",
//   maxSpeed: 220,
//   // transBox: "auto",
// };

// const {
//   color = "No info",
//   model = "No info",
//   weight = "No info",
//   name = "No info",
//   maxSpeed = "No info",
//   transBox = "No info",
// } = car1;

// console.log(color);
// console.log(car.color);
// console.log(transBox);

// function makeMessage(obj) {
//   const {
//     color = "No info",
//     model = "No info",
//     weight = "No info",
//     name = "No info",
//     maxSpeed = "No info",
//     transmissionBox = "No info",
//     a: transBox = "No info",
//   } = obj;
//   const message = `
// Color: ${color}.
// Model: ${model}.
// Weight: ${weight}.
// Name: ${name}.
// MaxSpeed: ${maxSpeed}.
// TransBox: ${transmissionBox !== "No info" ? transmissionBox : transBox}.
//   `;
//   console.log(message);
// }

// const car2 = {
//   color: "red",
//   model: "sedan",
//   weight: 1500,
//   name: "Ford",
//   maxSpeed: 220,
//   a: "auto",
// };
// makeMessage(car2);

// const firstBook = {
//   title: "The Last Kingdom",
//   // coverImage:
//   //   "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const numbers = [200, 255, 100];
// console.log(numbers[1]);
// const [one, two, three] = numbers;
// console.log(three);

// const numbers = [200, 255, 100];
// let one, two, three;
// console.log(two);
// [one, two, three] = numbers;

// const numbers = [200, 255, 100];
// const [one, two, three, four = 500] = numbers;
// console.log(four);

// const numbers = [200, 255, 100, 5, 45, 34, 78, 34, 456];
// const [one, two, three, ...array] = numbers;
// console.log(array);

// const numbers = [200, 255, 100, 5, 45, 34, 78, 34, 456];
// const [, , three, ...array] = numbers;
// console.log(three);

// function makeMessage(
//   color,
//   model,
//   weight,
//   name,
//   maxSpeed,
//   transmissionBox = "No info"
// ) {
//   const message = `
// Color: ${color}.
// Model: ${model}.
// Weight: ${weight}.
// Name: ${name}.
// MaxSpeed: ${maxSpeed}.
// TransBox: ${transmissionBox}.
//   `;
//   console.log(message);
// }

// makeMessage("red", "sedan", 1500, "Ford", 220);
