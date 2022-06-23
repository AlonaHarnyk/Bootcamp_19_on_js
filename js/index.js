// import obj from './users.js'

// const { a, b, c } = obj;

// console.log(a)

// const fa = {
//     "username": "mango",
//     "age": 2,]

// }

// const a = setTimeout(callback, delay, arg1, arg2, ...);

// const greet = (a, b) => {
//   console.log(a);
//   console.log(b);
// };

// // greet()

// const a = setTimeout(greet, 5000, 'Hello', 100);

// const greet = (a, b) => {
//   console.log(a);
//   console.log(b);
// };

// greet()

// const d = setTimeout((a, b) => {
//   console.log(a);
//   console.log(b);
// }, 0, 'Hello', 100);

// const a = setTimeout((a, b) => {
//   console.log(a);
//   console.log(b);
// }, 5000, 'Hello', 100);

// for (let i = 1; i <= 1000; i += 1) {
//   console.log(i)
// }

// console.log('!!!!!!!!!!!')

// const b = setTimeout((a, b) => {
//   console.log(a);
//   console.log(b);
// }, 1000, 'Hello', 100);

// console.log('&&&&&&&&&&&&')

// const c = setTimeout((a, b) => {
//   console.log(a);
//   console.log(b);
// }, 3000, 'Hello', 100);

// clearTimeout(c);

// const timerId = setInterval(callback, delay, arg1, arg2, ...)

// const greet = (a, b) => {
//   console.log(a);
//   console.log(b);
// };

// const x = setInterval(greet, 1000, 'a', 'b')

// // clearInterval(x)

// setTimeout(() => clearInterval(x), 5000)

// Write a function which returns a day number that was some amount of days ago from the passed date.
// It should not change the given source date.

// const getPastDay = (date, days) => {
//   const MS_PER_DAY = 1000 * 60 * 60 * 24
//   const msPerDays = MS_PER_DAY * days
//   const delta = date - msPerDays
//   console.log(delta)
//   return new Date(delta).getDate()
// }

// const date = new Date(2020, 0, 2);
// console.log(getPastDay(date, 1)); // 1, (1 Jan 2020)
// console.log(getPastDay(date, 2)); // 31, (31 Dec 2019)
// console.log(getPastDay(date, 365)); // 2, (2 Jan 2019)

// Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// const formatDate = data => {
//   const formatNumber = number => {
//     if (number < 10) {
//       return `0${number}`
//     } else {
//       return number
//     }
//   }
//   const year = data.getFullYear();
//   const month = formatNumber(data.getMonth() + 1);
//   const day = formatNumber(data.getDate())
//   const hours = formatNumber(data.getHours())
//   const minutes = formatNumber(data.getMinutes())
//   return `${year}/${month}/${day} ${hours}:${minutes}`
// }

// console.log(formatDate(new Date('6/15/2019 09:15:00')) )// "2019/06/15 09:15"
// console.log(formatDate(new Date())) // gets current local time

// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally( () => console.log('Settled'))

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(ms)
//     }, ms)
//   })
// };

// const logger = ms => console.log(`Resolved after ${ms}ms`);

// // Вызовы функции для проверки
// delay(2000).then((value) => logger(value)); // Resolved after 2000ms
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// // delay(2000).then(value => {
// //     console.log(value);
// //   }
// // ) // Resolved after 2000ms

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     // console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     // console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

// // First variant
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// Second variant
// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise((resolve) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );
//     resolve(updatedUsers);
//   });
// };

// const logger = (updatedUsers) => console.table(updatedUsers);
// // /*
// //  * Должно работать так
// //  */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);
