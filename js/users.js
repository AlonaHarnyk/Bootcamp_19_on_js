const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// const names = users.map(user => user.name)
// console.log(names)
// console.log(users)

// const shortedUsers = users.map(user => ({ name: user.name, email: user.email }))

// const shortedUsers = users.map(({name, email}) => ({name: name, email:email}))

// const shortedUsers = users.map(({name, email}) => ({name, email})) // цей варіант основний
// const shortedUsers = users.map(({name, email: mail}) => ({name, mail}))
// console.log(shortedUsers)
// console.log(users)

// const array = [
//   1,
//   4,
//   5,
//   [1, 5],
//   45,
//   56,
//   [1, [5, 6]],
//   [4, 9],
//   [1, [5, 6, [5, 0]]],
// ];

// const array1 = array.flat()
// // console.log(array)
// // console.log(array1)
// const array2 = array.flat(Infinity)
// console.log(array2)

// const friends = users.flatMap(user => user.friends)

// console.log(friends)

// const array3 = users.filter(user => user.age >= 30)
// const array3 = users.filter(({age, balance}) => age >= 30 && balance < 2000)
// console.log(array3)

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills);

// const uniqueSkills = skills.filter(
//   (skill, index, array) => array.indexOf(skill) === index
// );
// console.log(uniqueSkills);

// const numbers = [1, 3, 3, 2, 4, 4, 3, 3, 5];
// const uniqueNumbers = numbers.filter(
//   (num, index, array) => array.indexOf(num) === index
// );
// console.log(uniqueNumbers);

// const user = users.find(({balance, age}) => balance === 2278 && age === 21)
// console.log(user)
// console.log(users.indexOf(user))

// const userIndex = users.findIndex(({ balance, age }) => balance === 2278 && age ===20)
// console.log(userIndex)

// const isInRange = users.every(({ age }) => age > 20 && age < 40)
// console.log(isInRange)
// const isInRange = users.every(({ age }) => age > 20 && age < 30)
// console.log(isInRange)

// const hasSkill = users.every(({ skills }) => skills.includes('ipsum'))
// console.log(hasSkill)

// const filtered = users.filter(({ skills }) => skills.includes('ipsum'))
// console.log(filtered)
// const hasSkill = users.length === filtered.length
// console.log(hasSkill)
// console.log(users.length === filtered.length)
// const hasSkill = users.length === filtered.length ? true : false
// console.log(hasSkill)

// const filtered = users.filter(({ skills }) => skills.length > 0)

// const isRich = users.some(({ balance }) => balance >= 3000)
// console.log(isRich)

// const isRich = users.every(({ balance }) => balance >= 3000)
// console.log(isRich)

// const numbers = [2, 7, 3, 14, 6]
// const total = numbers.reduce((previousValue, number) => {
//   console.log(previousValue, number)
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// const addPositiveNumbers = (...args) => {
//   const positiveNumbers = args.filter(arg => arg >= 0)
//   // console.log(positiveNumbers)
//   const result = positiveNumbers.reduce((sum, num) => sum += num, 0)
//   return result
// }

// const addPositiveNumbers = (...args) =>
//   args.filter((arg) => arg >= 0).reduce((sum, num) => (sum += num), 0);

//   const addPositiveNumbers = (...args) =>
//   args.filter((arg) => arg >= 0).reduce((sum, num) => (sum + num));

// console.log(addPositiveNumbers(5, 2, 3, 0, 4, 1)); // 15
// console.log(addPositiveNumbers(5, 2, 3, 0, -4, -1)); // 10

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   console.log(previousValue, number)
//   return previousValue + number;
// });

// console.log(total); // 32

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   console.log(allTags)
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log(tags)

// const getTagStats = (acc, tag) => {
//   console.log(acc)
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const letterCount = (word, letter) =>
//   word
//     .toLowerCase()
//     .split("")
//     .filter((item) => item === letter).length;

// const letterCount = (word, letter) =>
//   word
//   .toLowerCase()
//   .split("")
//   .reduce((acc, item) => item === letter ? acc + 1 : acc, 0)

// console.log(letterCount("Maggy", "g")); // 2
// console.log(letterCount("Barry", "b")); // 1

// const getArray = (array) =>
//   array.reduce(
//     (acc, num, idx) => (idx === 0 ? [num] : [...acc, acc[idx - 1] + num]),
//     []
//   );

// console.log(getArray([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]

// const getArray = (array) =>
//   array.reduce((acc, num, idx) => {
//     if (idx === 0) {
//       return [num];
//     } else {
//       console.log(acc);
//       console.log(acc[idx - 1]);
//       console.log([...acc, acc[idx - 1] + num]);
//       return [...acc, acc[idx - 1] + num];
//     }
//   }, []);

// console.log(getArray([1, 2, 3, 4, 5])); // [1, 3, 6, 10, 15]

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// const letters = ['a', 'w', 'm', 'b', 'o']
// letters.sort()
// console.log(letters)
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// const scores = [61, 19, 74, 35, 92, 56];
// // const ascendingScores = [...scores].sort((a, b) => a - b);
// const ascendingScores = [...scores].sort((a, b) => {
//   console.log(a, b)
//   return a - b
// });

// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const nums = [1, 2, 3]
// nums.sort((a, b) => {
//   console.log(a, b)
//   return a - b
// });

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // // Записуємо посилання на функцію у властивість об'єкта
// // // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// console.log(user)

// // // console.log(showThis)
// // // console.log(user.showContext)
// // // Викликаємо функцію в контексті об'єкта
// // // this буде вказувати на поточний об'єкт, в контексті
// // // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();


// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis();

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext();

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(customer.getFullName())

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// makeMessage(customer.getFullName.bind(customer)); 

// const a = customer.getFullName.bind(customer)

// makeMessage(a); // Обробляємо заявку від Jacob Mercer.