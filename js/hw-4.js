// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// }
// console.log(apartment);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length-1];
// console.log(lastTag);


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   slip: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// console.log(aptRating);
// const aptSlip = apartment['slip'];
// console.log(aptSlip);
// const aptPrice = apartment['price'];
// console.log(aptPrice);
// const aptTags = apartment['tags'];
// console.log(aptTags);


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }


// function countProps(object) {
//   const keyArray = Object.keys(object);
//   console.log(keyArray);
//    let propCount = 0;
// for (let key of keyArray) {
//   propCount += 1;
// }
//     return propCount;
// }
// console.log(countProps({name: "Mango", age: 2}));//повертає 2


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]
// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// console.log(keys);
// const values = Object.values(apartment);
// console.log(values);


// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//   const arraySalary = Object.values(salaries);
//   console.log(arraySalary);
//   let totalSalary = 0;
//   for (const values of arraySalary) {
//     totalSalary += values;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({}));//повертає 0
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80,}));// повертає 330
// console.log(countTotalSalary({kiwi: 200, poly: 50, ajax: 150,}));// повертає 400


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// console.log(hexColors);
// const rgbColors = [];
// console.log(rgbColors);
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];
// const authorToSearchFor = "Robert Sheckley";
// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));// повертає 1300.
// console.log(getProductPrice("Grip"));// повертає 1200.
// console.log(getProductPrice("Scanner"));// повертає 2700.
// console.log(getProductPrice("Droid"));// повертає 400.
// console.log(getProductPrice("Engine"));// повертає null.


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
// const newArray = [];
//   for (let product of products) {
//     if (propName in product) {
//       newArray.push(product[propName])
//     }
//   }
//   return newArray;
//  }
// console.log(getAllPropValues("name"));// повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));// повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price"));// повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));// повертає []


// Доповни код функції так, щоб вона повертала загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.
// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!",
//   де < productName > — це ім'я товару.

// function calculateTotalPrice(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (let product of products) {
//     if (product.name === propName) {
//       return product.price * product.quantity;
//     }
//   }
//    return `Product ${propName} not found!`;
//  }
// console.log(calculateTotalPrice("Blaster"));// повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar"));// повертає 5200
// console.log(calculateTotalPrice("Droid"));// повертає 2800
// console.log(calculateTotalPrice("Grip"));// повертає 10800
// console.log(calculateTotalPrice("Scanner"));// повертає 8100


// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];
// const titles = [];
// for (const book of books) {
// 	titles.push(book.title)
// }
// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]


// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions());// повертає рядок "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility"));// повертає рядок "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion"));// повертає рядок "Adding Power potion"


// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());// повертає поточне значення властивості potions


// const bookShelf = {
//   books: ["The Last Kingdom"],
// };
// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// console.log(bookShelf.getBooks());
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// atTheOldToad.getPotions();// повертає поточне значення властивості potions
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Invisibility"); // ["Speed potion", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("Power potion"); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]
// console.log(atTheOldToad.getPotions());


// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };
// console.log(bookShelf);
// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.books);


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getRating() {
//     let totalRating = 0;
//     for (const book of this.books) {
//       totalRating += book.rating;
//     }
//     return totalRating / this.books.length;
//   },
// };
// bookShelf.getRating(); // 7
// console.log(bookShelf.getRating());


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let sumPrice = 0;
//     for (const potion of this.potions) {
//       sumPrice += potion.price;
//     }
//     return sumPrice;
//   },
// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.getTotalPrice();
// console.log(atTheOldToad.getTotalPrice());
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });// в масиві potions останнім елементом буде цей об'єкт
// console.log(atTheOldToad.potions);
// atTheOldToad.getTotalPrice();
// console.log(atTheOldToad.getTotalPrice());
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });// в масиві potions останнім елементом буде цей об'єкт
// console.log(atTheOldToad.potions);
// atTheOldToad.getTotalPrice();
// console.log(atTheOldToad.getTotalPrice());


// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"
// const str = [Peter, John, Igor, Sasha}


//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   let minNumber = 0;
//   for (const number of numbers) {
//     if ()
//   }
// }


//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sumNumber = 0;
//   let countNamber = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sumNumber += arg;
//       countNamber += 1;
//     }  
//   }
//   return sumNumber / countNamber;
// }

// console.log(caclculateAverage(5, 10, 15, 'Hello'));

//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of
// const user = {
// name: "John",
// age: 20,
// hobby: "tenis",
// premium: true,
//};


//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
//];


// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };
// bookShelf.changeRating("The Mist", 9);
// console.log(bookShelf.books);
// bookShelf.changeRating("The Last Kingdom", 4);
// console.log(bookShelf.books);


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);//[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 }]
// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.potions);//[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]


// function multiply(a, b, c, d) {
// 	console.log(a, b, c, d)
// }
// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2
// multiply(1, 2, 3, 4); // 1 2


// function multiply() {
// 	console.log(arguments)
// }
// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]


// function multiply(...args) {
//   console.log(args);
// }
// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]


// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
// щоб вона приймала будь - яку кількість аргументів у параметр args і повертала їхню суму.
// function add(...args) {
//   let sumAdd = 0;
//   for (const arg of args) {
//     sumAdd += arg;
// }
//   return sumAdd;
// }
// console.log(add(15, 27));// повертає 42
// console.log(add(12, 4, 11, 48));// повертає 75
// console.log(add(32, 6, 13, 19, 8));// повертає 78


// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }
// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]


// function addOverNum(value, ...args) {
//   let sumNum= 0;
//   for (const arg of args) {
//     if (arg > value) {
//       sumNum += arg;
//     }
//   }
//   return sumNum;
// }
// console.log(addOverNum(50, 15, 27));// повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));// повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));// повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));// повертає 218


// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор(...spread) і методи Math.max() і Math.min().
// Для передачі аргументів методам Math.max() і Math.min() використовується синтаксис ... на масиві scores

// function getExtremeScores(scores) {
//   const maxNum = Math.max(...scores);
//   const minNum = Math.min(...scores);
//   return { best: maxNum, worst: minNum};
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));// повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));// повертає об'єкт { best: 81, worst: 4 }


// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]


// const lastWeekTemps = [14, 25, 11];
// console.log(lastWeekTemps);
// const currentWeekTemps = [23, 17, 18];
// console.log(currentWeekTemps);
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores


// const first = { propA: 5, propB: 10 };
// console.log(first);
// const second = { propC: 15 };
// console.log(second);
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }


// const first = { propA: 5, propB: 10, propC: 50 };
// console.log(first);
// const second = { propC: 15, propD: 20 };
// console.log(second);
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }


// const first = { propA: 5, propB: 10, propC: 50 };
// console.log(first);
// const second = { propC: 15 };
// console.log(second);

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// console.log(defaultSettings);
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// console.log(overrideSettings);

// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);


