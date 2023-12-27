"use strict";

// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(this.username);
//   },
// };
// user.showName();


// const user = {
//   username: "Victor",
//   showName() {
// 		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };
// user.showName();


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked"));// повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats"));// повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike"));// повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese"));// повертає рядок "Sorry, there is no pizza named «Viennese»"


// function foo() {
//   console.log(this);
// }
// foo(); // window


// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   }
// };
// user.showThis(); // {username: "Poly", showThis: ƒ}


// function showThis() {
//   console.log("this in showThis: ", this);
// }
// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"
// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"


// const book = {
// 	updateTitle(newTitle) {
// 		// ...
// 	}
// };
// const update = book.updateTitle;
// update("Lord Of The Rings");
// console.log(update());


// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };
// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"


// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"


// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"



// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4



// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));// повертає true
// console.log(parent.hasOwnProperty("heritage"));// повертає true
// console.log(child.hasOwnProperty("name"));// повертає true
// console.log(child.name);// повертає "Jason"
// console.log(child.hasOwnProperty("age"));// повертає true
// console.log(child.age);// повертає 27
// console.log(child.hasOwnProperty("surname"));// повертає false
// console.log(child.surname);// повертає "Moore"
// console.log(child.hasOwnProperty("heritage"));// повертає false
// console.log(child.heritage);// повертає "Irish"
// console.log(parent.isPrototypeOf(child));// повертає true



// const customer = {
// 	username: "Jacob"
// };
// const animal = {
// 	legs: 4
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog.legs); // { name: "Mango", [[Prototype]]: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false



// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// dog.age = 20;
// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }



// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined



// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent));// повертає false
// console.log(parent.isPrototypeOf(child));// повертає false
// console.log(ancestor.hasOwnProperty("surname"));// повертає true
// console.log(ancestor.surname);// повертає "Dawson"
// console.log(parent.hasOwnProperty("surname"));// повертає true
// console.log(parent.surname);// повертає "Moore"
// console.log(child.hasOwnProperty("surname"));// повертає false
// console.log(child.surname);// повертає "Moore"
// console.log(ancestor.hasOwnProperty("heritage"));// повертає true
// console.log(ancestor.heritage);// повертає "Irish"
// console.log(parent.hasOwnProperty("heritage"));// повертає false
// console.log(parent.heritage);// повертає "Irish"
// console.log(child.hasOwnProperty("heritage"));// повертає false
// console.log(child.heritage);// повертає "Irish"
// Використовується метод Object.create()



// const objB = {
// 	b: "objB prop"
// };

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);



// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());



// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const poly = new User();
// console.log(poly); // {}

// const mango = new User(); // "constructor call"
// console.log(mango); // {}



// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }
// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}



// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }



// class Car {
//   constructor ({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });// утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// console.log(car1);
// console.log(car1.getPrice());
// car1.changePrice(40000);
// console.log(car1.getPrice());
// const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 });// утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// console.log(car2);
// const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });// утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}
// console.log(car3);
// const car1 = new Car("Audi", "Q3", 36000);// утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// console.log(car1);
// const car2 = new Car("BMW", "X5", 58900);// утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// console.log(car2);
// const car3 = new Car("Nissan", "Murano", 31700);// утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}
// console.log(car3);



// class User {
// constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }



// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"


















//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName(callback)



//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
























