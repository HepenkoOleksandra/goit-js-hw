// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']


// function getOrderQuantity(order) {
//     return order.length;
// }
// const get = getOrderQuantity(["apple", "peach", "pear", "banana"]);//4
// console.log(get);
// console.log(getOrderQuantity(["apple", "banana"]));// 2
// console.log(getOrderQuantity(["apple", "banana", "pear"]));// 3
// console.log(getOrderQuantity([]));// 0

// function getLastElementMeta(array) {
//   const lastIndex = array.length-1;
//   return [lastIndex, array[lastIndex]];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));// [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"]));// [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"]));// [1, "peach"]
// console.log(getLastElementMeta(["apple"]));// [0, "apple"]


// function getExtremeElements(array) {
//   const getIndex = array.length-1;
//   return [array[0], array[getIndex]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));// [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));// ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));// ["apple", "banana"]


// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// b = 7;
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]


// const array = [1, 2, 3];
// const str = String(array);
// console.log(str);
// const num = Number.parseInt(array);
// console.log(num);


// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }
// transformString("user_age"); // "user-age"
// console.log(transformString("user_age"));
// transformString("price_per_droid"); // "price-per-droid"
// console.log(transformString("price_per_droid"));


// function getLength(array) {
//     const arrLength = array.join('');
//     console.log(arrLength);
//     return arrLength.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));// 22
// console.log(getLength(["M", "a", "n", "g", "o"]));// 5
// console.log(getLength(["top", "picks", "for", "you"]));//14


// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(' ');
//     console.log(words);
//  return words.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));// 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));// 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40));// 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20));// 80


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);//["apple", "plum"]
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);//["plum", "pear", "orange"]
// const lastThreeEls = fruits.slice(2);
// console.log(lastThreeEls);//["pear", "orange", "banana"]


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);


// function getSlice(array, value) {
// //     const index = array.indexOf(value);
// //   if (index === -1) {
// //       return [];
    
// //   } else {
// //     return array.slice(0, index + 1);
//     //         }
//   if (array.indexOf(value) === -1) {
//       return [];
    
//   } else {
//     return array.slice(0, array.indexOf(value) + 1);
//         }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));// ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));// ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));// ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));// []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));// []


// const tags = [];
// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// function createArrayOfNumbers(min, max) {
//   const arrayNumbers = [];
//   for (let i = min; i <= max; i++) {
//     arrayNumbers.push(i);
//   }
//   return arrayNumbers;
// }
// console.log(createArrayOfNumbers(1, 3));// [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // повертає [29, 30, 31, 32, 33, 34]
// console.log(createArrayOfNumbers(1, 100));// з випадковими min і max повертає правильний масив


// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }


// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));// 138
// console.log(calculateTotalPrice([164, 48, 291]));// 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));// 1116
// console.log(calculateTotalPrice([]));// з випадковим масивом повертає правильне значення


// function getEvenNumbers(start, end) {
//   let newArray = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//     return newArray;
// }
// console.log(getEvenNumbers(2, 5)); //повертає [2, 4]
// console.log(getEvenNumbers(3, 11)); // повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); //повертає [8]
// console.log(getEvenNumbers(7, 7)); //повертає []
// console.log(getEvenNumbers()); // з випадковими start і end повертає правильний масив


// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));// повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));// повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));// повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));// повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));// повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));// повертає "Sorry! We are out of stock!"


// function getCommonElements(array1, array2) {
//   let array3 = [];
//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }
//   return array3;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));//повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));// повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));// повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));// повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// повертає []
// console.log(getCommonElements([], []));// з випадковими двома масивами повертає правильний масив


// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);
// }


// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let sumPrice of order) {
//     sum += sumPrice;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));// повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));// повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//повертає 1116
// console.log(calculateTotalPrice([]));// повертає 0
// console.log(calculateTotalPrice([]));// з випадковим масивом чисел повертає правильну суму


// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }
// console.log(sum(2, 5));


// function multiply() {
//   let total = 1;
//   for (const arg of arguments) {
//     total *= arg;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   console.log(args);
// 	return args.join("-");
// }
// console.log(foo(1, 2, 3)); // Поверне "1-2-3"


// function createReversedArray() {
//   // const arr = Array.from(arguments);
//   // return arr.toReversed();
//   const arr = [];
//   for (const arg of arguments) {
//     arr.unshift(arg);
//   }
//   return arr;
// }
// console.log(createReversedArray(12, 85, 37, 4));// повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291));// повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176));// повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray());// повертає []


// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));// повертає 10
// console.log(calculateTax(200, 0.1));// повертає 20
// console.log(calculateTax(100, 0.2));// повертає 20
// console.log(calculateTax(200, 0.2));// повертає 40
// console.log(calculateTax(100, 0.3));// повертає 30
// console.log(calculateTax(200, 0.3));// повертає 60
// console.log(calculateTax(100));// повертає 20
// console.log(calculateTax(200));// повертає 40
