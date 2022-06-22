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

const greet = (a, b) => {
  console.log(a);
  console.log(b);
};

const x = setInterval(greet, 1000, 'a', 'b')

// clearInterval(x)

setTimeout(() => clearInterval(x), 5000)