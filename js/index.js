// "use strict";

// // Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей пядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // може ініціалізувати юез присвоєння значення;
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;

// // Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// confirm("Is your name Ivan?"); // користувач може відповісти так  або відхилити питання
// prompt("What is your name?"); // користувач  може ввест якісь дані або відхилити питання

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// //Загальні правила порівняння
// // Результатом порівняння буде бульове значення.
// // При порівнянні різних типів, операнди наводяться до числа (за винятком порівняння  з використанням операторів ===, !==)
// //  null не дорівнює нічому крім себе та undefined.
// //  undefined не дорівнює нічому крім себе та null.
// // Рядки між собою порівнюються за unicode (посимвольно).

// //   Правила приведення різних типів до числа:
// //   true --> 1
// //   false --> 0
// //   '' --> 0
// //   null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// //  Оператор <=
// console.log(4 <= 6); // true
// console.log(5 <= 5); // true
// console.log(5 <= 4); // false

// // Оператор >=
// console.log(5 >= 3); //true
// console.log(5 >= 5); //true
// console.log(3 >= 4); // false

// // Оператор ==
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(undefined == 0); //false
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); //false

// // Оператор ===
// console.log("123" === 123); //false
// console.log(null === null); //true
// console.log(2 + 2 === 4); //true

// // Оператор !=
// console.log("4" != 4); //false

// // Оператор !==
// console.log("4" !== 4); // true

// //  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// // (falsy) значення, що приводяться до false у логічному перетворенні:
// // 0
// // NaN
// // null
// // undefined
// // порожній рядок
// // false.
// // Абсолютно все інше приводиться до true.

// // && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// // || - запинається на true
// // Повертає перше правидиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// // ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); //false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // ''
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); //true
// console.log(false || true || 7); //true
// console.log(null || 2 || undefined); //2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); //3
// console.log(null || (null && 3) || 4); // 4

// // Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // '700'
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); //'9px'
// console.log("$" + 4 + 5); //'$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); // ' -9 5'
// console.log(!null + 1); // 2

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); //false
// console.log(Number.isNaN(b)); //false

// const toNumber = Number(b);
// console.log(toNumber); //NaN
// console.log(Number.isNaN(toNumber)); //true
// console.log(!Number.isNaN(toNumber)); //false

// const data = prompt("Enter a number, please");
// console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);

// const isNumber = !Number.isNaN(dataToNumber);
// console.log(isNumber);

// const num1 = 0.1;
// const num2 = 0.2;
// const sum1 = num1 + num2;
// console.log(sum1.toFixed(3));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(sum1);
// console.log(fixedSum1);

// const num3 = 0.3;
// const num4 = 0.6;
// const sum2 = num3 + num4;
// console.log(sum2.toFixed(3));
// const fixedSum2 = Number(sum2.toFixed(3));
// console.log(sum2);
// console.log(fixedSum2);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, не включаючи max)
// const min1 = 5;
// const max1 = 10;
// const randomNumber1 = Math.random() * (max1 - min1) + min1;
// console.log(randomNumber1);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, не включаючи max)
// const min2 = Math.ceil(5);
// const max2 = Math.floor(10);
// const randomNumber2 = Math.floor(Math.random() * (max2 - min2) + min2);
// console.log(randomNumber2);

// // Повернення рандомного числа в заданому діапазоні (від min, включаючи min, до max, включаючи max)
// const min3 = Math.ceil(5);
// const max3 = Math.floor(10);
// const randomNumber3 = Math.floor(Math.random() * (max3 - min3 + 1) + min3);
// console.log(randomNumber3);

// const userName = "Ivan";
// const age = "60";

// const message = `My name is ${userName} , I'm ${age} years old`;
// console.log(message);

// const word1 = "     ";
// console.log(Number(word1)); // 0
// console.log(word1.length); //5

// const word2 = "hTMl";
// console.log(word2.toLowerCase()); //html
// console.log(word2.toUpperCase()); //HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// console.log(word4.indexOf("a")); // 1
// console.log(word4.lastIndexOf("a")); // 5
// console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); //  false
// console.log(word3.includes(substring2)); // false

// const word5 = "javascript";
// const word6 = word5.slice(0, 4);
// console.log(word6); //java
// const word7 = word5.slice(4, 10);
// console.log(word7); // script
// const word8 = word5.slice(4, word5.length);
// console.log(word8); // script
// const word9 = word5.slice(4);
// console.log(word9); // script
// const word10 = word5.slice(-6);
// console.log(word10);
// const word11 = "     cake     ";
// console.log(word11.trim());

// const number1 = Number(prompt("Enter a number, please"));
// console.log(number1);
// const number2 = Number(prompt("Enter a number, please"));
// console.log(number2);

// if (number1 > number2) {
//   console.log("were are here");
// }

// if (number1 > number2) {
//   console.log("+");
// } else {
//   console.log("-");
// }

// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// } else {
//   console.log("<");
// }

// if (number1 > number2) {
//   console.log(">");
// } else {
//   if (number1 === number2) {
//     console.log("=");
//   } else {
//     console.log("<");
//   }
// }

// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// }

// if (number1 === 5) {
//   console.log(5);
// } else if (number1 === 10) {
//   console.log(10);
// } else if (number1 === 20) {
//   console.log(20);
// } else {
//   console.log("no");
// }

// if (number1 > 50 && number2 > 50) {
//   console.log("super");
// }

// const number1 = 10;
// number1 > 20 ? console.log("true") : console.log("false"); // 'false'
// const number2 = 30;
// number2 > 20 ? console.log("true") : console.log("false"); // 'true''

// const number3 = 10;
// number3 > 20
//   ? console.log(">")
//   : number3 === 20
//   ? console.log("=")
//   : console.log("<"); // так робити НЕ ТРЕБА, бо буде боляче

// const number = Number(prompt("Enter a number between 0 and 3"));

// switch (number) {
//   case 0:
//     console.log("Your entered 0");
//     break;

//   case 1:
//     console.log("Your entered 1");
//     break;

//   case 2:
//     console.log("Your entered 2");
//     break;

//   case 3:
//     console.log("Your entered 3");
//     break;

//   default:
//     console.log("Your entered another number");
// }

// if (number === 0) {
//   console.log("Your entered 0");
// } else if (number === 1) {
//   console.log("Your entered 1");
// } else if (number === 2) {
//   console.log("Your entered 2");
// } else if (number === 3) {
//   console.log("Your entered 3");
// } else {
//   console.log("Your entered another number");
// }

// const variable = 123;

// if (2 > 1) {
//   console.log(variable);
// }

// глобальна область видимості

// if (2 > 1) {
//   // блочна область видимості 1
//   const variable2 = 123;
//   console.log(variable2);
//   // console.log(variable3);
//   if (4 > 3) {
//     // блочна область видимості 2
//     const variable3 = 456;
//     console.log(variable3);
//   }
// }

// console.log(variable2);

// let counter = 1;

// while (counter <= 5) {
//   console.log("counter: ", counter);
//   // counter = counter + 1
//   counter += 1;
// }

// console.log("next");

// let number;

// do {
//   console.log("here");
//   number = Number(prompt("Введіть число, яке більше 100"));
// } while (number < 100);

// console.log(number);

// let counter = 1;

// do {
//   console.log(counter);
//   counter += 1;
// } while (counter < 5);

// const num = 10;
// const num2 = 50;

// for (let i = num; i <= num2; i += 10) {
//   console.log(i);
// }

// let word = "";

// for (let i = 0; i < 10; i += 1) {
//   console.log("previous string", word);
//   console.log(i);
//   word = word + i;
//   console.log("next string", word);
// }

// console.log("final string", word);

// const word = "javascript";
// let word2 = "";
// // console.log(word[5])

// for (let i = 0; i < word.length; i += 1) {
//   // word2 = word2 + word[i];
//   word2 += word[i];
//   console.log(word2);
// }

// console.log(word2);

// const a = "123";
// const b = Number(a);
// const c = +a;

// console.log(a);
// console.log(b);
// console.log(c);

// const number = 12345;
// // 54321
// const string = String(number); // '12345'
// let reverseString = "";
// // const string = number + "";

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   // console.log(i);
//   // console.log("previous string", reverseString);
//   reverseString = reverseString + string[i];
//   // console.log("next string", reverseString);
// }

// console.log(Number(reverseString));

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// for (let i = 0; i <= 15; i += 1) {
//   if (i / 3 === 4 || i / 3 === 5) {
//     continue;
//   }
//   console.log(i);
// }

// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3. For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers,  check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

// const summ = prompt("Input check summ, please");
// const percentage = prompt("Input  percentage, please");
// console.log(summ, percentage);

// if (summ === null || percentage === null) {
//   alert("Canceled");
// } else {
//   const parsedSumm = Number.parseFloat(summ);
//   const parsedPercentage = Number.parseFloat(percentage);
//   console.log(parsedSumm, parsedPercentage);
//   if (
//     Number.isNaN(parsedSumm) ||
//     Number.isNaN(parsedPercentage) ||
//     parsedSumm < 0 ||
//     parsedPercentage < 0 ||
//     parsedPercentage > 100
//   ) {
//     alert("Invalid data");
//   } else {
//     const tipAmount = Number(
//       ((parsedSumm * parsedPercentage) / 100).toFixed(2)
//     );
//     const totalSumm = (parsedSumm + tipAmount).toFixed(2);
//     const message = `
//     Check summ: ${parsedSumm}
//     Tip: ${parsedPercentage}%
//     Tip amount: ${tipAmount}
//     Total sum to pay:  ${totalSumm}`;
//     alert(message);
//   }
// }
