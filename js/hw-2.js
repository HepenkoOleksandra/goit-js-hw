// let price = 0;
// const subscription = "pro";
// if (subscription === "free") {
//   price = 100;
// }
// const result = price;
// console.log(result);

// function checkAge(age) {
//     if (age >= 18) {
//   return "You are an adult";
//     }
// }
// const result1 = checkAge(20);
// console.log(result1);
// const result2 = checkAge(17);
// console.log(result2);
// const result3 = checkAge(10);
// console.log(result3);
// const result4 = checkAge(30);
// console.log(result4);

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// const result1 = checkStorage(100, 50);
// console.log(result1);
// const result2 = checkStorage(100, 130);
// console.log(result2);
// const result3 = checkStorage(200, 20);
// console.log(result3);
// const result4 = checkStorage(200, 150);
// console.log(result4);
// const result5 = checkStorage(150, 180);
// console.log(result5);

// function checkStorage(available, ordered) {
// if (ordered === 0) {
//   return "There are no products in the order!";
// } else if (available < ordered) {
//   return "Your order is too large, there are not enough items in stock!";
// } else {
//   return "The order is accepted, our manager will contact you";
// }
// }
// const result1 = checkStorage(100, 50);
// console.log(result1);
// const result2 = checkStorage(100, 130);
// console.log(result2);
// const result3 = checkStorage(70, 0);
// console.log(result3);
// const result4 = checkStorage(200, 20);
// console.log(result4);
// const result5 = checkStorage(200, 250);
// console.log(result5);
// const result6 = checkStorage(150, 0);
// console.log(result6);
// const result7 = checkStorage(80, 80);
// console.log(result7);

// function checkPassword(password) {
//     const correctPassword = password === "jqueryismyjam" ? "Access granted" : "Access denied, wrong password!";
//     return correctPassword;
// }

// const result = checkPassword("jqueryismyjam");
// console.log(result);

// const result1 = checkPassword("angul4r1sl1f3");
// console.log(result1);

// const result2 = checkPassword("r3actsux");
// console.log(result2);

// function getSubscriptionPrice(type) {
//  switch (type) {
//    case "starter":
//      return 0;
//      break;
//   case "professional":
//      return 20;
//      break;
//   case "organization":
//      return 50;
//      break;
//    default:
//      return "Invalid subscription type!";
//  }
// }

// const result = getSubscriptionPrice("professional");
// console.log(result);
// const result1 = getSubscriptionPrice("organization");
// console.log(result1);
// const result2 = getSubscriptionPrice("starter");
// console.log(result2);
// const result3 = getSubscriptionPrice("random");
// console.log(result3);
// const result4 = getSubscriptionPrice("premium");
// console.log(result4);

// console.log("hello" && 0);
// console.log(0 && "hello");

// console.log(3 && false);
// console.log(false && 3);

// console.log(0 && "");
// console.log("" && 0);

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// function

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case

// function foo(num) {
//   let result;
//     switch (num) {
//       case 1:
//         result = 'зима';
//         break;
//       case 2:
//         result = 'весна';
//         break;
//       case 3:
//         result = 'літо';
//         break;
//       case 4:
//         result = 'осінь';
//         break;
//       default:
//         result = "Error"
//   }
//   return result;
// }
// const numNam = foo(4);
// console.log(numNam);

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10


// function getTime(totalMinuts) {
//   const minuts = totalMinuts % 70;
// }
// console.log(getTime(70));

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;

// function logNumbers(max, min) {
//   let sum = 0;
//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if(i % 2 === 0) {
//       sum += i;
//  console.log(i);
//     }
//   }
//   return sum;
// }

// console.log(logNumbers(max, min));

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("Enter login");
// console.log(login);
// function checkLoginPassword(login) {
//   if (login === "Адмін") {
//     const password = prompt("Enter password");
//     if (password === "Я головний") {
//       alert("Добрий день!");
//     } else if(!password){
//       alert("Скасовано");
//     } else {
//       alert("Невірний пароль!");
//     }
//   } else if (!login) {
//     alert("Eror");
//   } else {
//     alert("Я вас не знаю")
//   }
// }
// checkLoginPassword(login);

// const screenWidth = 1300;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// function screenType(screenWidth) {
// if(screenWidth <= sm) {
//   result = "Mobile screen";
//   // console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	result = "Tablet screen";
//   // console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	result = "Desktop screen";
//   // console.log("Desktop screen");
// } else {
// 	result = "Godzilla screen";
//   // console.log("Godzilla screen");
//   }
//   return result;
// }
// const screen = screenType(screenWidth);
// console.log(screen);

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
//   }
// const result1 = isNumberInRange(10, 30, 17);
// console.log(result1);
// const result2 = isNumberInRange(10, 30, 5);
// console.log(result2);
// const result3 = isNumberInRange(20, 50, 24);
// console.log(result3);
// const result4 = isNumberInRange(20, 50, 76);
// console.log(result4);


// const screenWidth = 800;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// function screen(screenWidth) {
// if (screenWidth <= sm || screenWidth > md) {
// 	result = "Mobile or Desktop screen";
//   } else {
//   result = "Non mobile or Desktop screen";
//   }
//   return result;
// }
// const width = screen(screenWidth);
// console.log(width);


// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }
// const result = checkAccess("pro");
// console.log(result);
// const result1 = checkAccess("starter");
// console.log(result1);
// const result2 = checkAccess("vip");
// console.log(result2);
// const result3 = checkAccess("free");
// console.log(result3);


// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));


// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// const result1 = getSubstring("Hello world", 3);//Hel
// console.log(result1);
// const result2 = getSubstring("Hello world", 5);//"Hello"
// console.log(result2);
// const result3 = getSubstring("Hello world", 8);//"Hello wo"
// console.log(result3);
// const result4 = getSubstring("Hello world", 11);//"Hello world"
// console.log(result4);
// const result5 = getSubstring("Hello world", 0);//""
// console.log(result5);


// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// const result1 =  normalizeInput("This ISN'T SpaM", "lower");// "this isn't spam"
// console.log(result1);
// const result2 = normalizeInput("This ISN'T SpaM", "upper");// "THIS ISN'T SPAM"
// console.log(result2);
// const result3 = normalizeInput("Big SALE", "lower");// "big sale"
// console.log(result3);
// const result4 = normalizeInput("Big SALE", "upper");// "BIG SALE"
// console.log(result4);
// const result5 = normalizeInput("Stay Awhile and Listen", "lower");// "stay awhile and listen"
// console.log(result5);
// const result6 = normalizeInput("Stay Awhile and Listen", "upper");// "STAY AWHILE AND LISTEN"
// console.log(result6);


// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }


// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase())
// }
// const result1 = checkForName("Jason Neis", "Jason");// true
// console.log(result1);
// const result2 = checkForName("Jason Neis", "jAsOn");// true
// console.log(result2);
// const result3 = checkForName("Jason Neis", "Jacob");// false
// console.log(result3);
// const result4 = checkForName("Caty Stars", "Caty");// true
// console.log(result4);
// const result5 = checkForName("Caty Stars", "cAtY");// true
// console.log(result5);
// const result6 = checkForName("Caty Stars", "Andromeda");// false
// console.log(result6);


// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// const result1 = checkFileExtension("styles.css", ".css");// "File extension matches"
// console.log(result1);
// const result2 = checkFileExtension("styles.css", ".js");// "File extension does not match"
// console.log(result2);
// const result3 = checkFileExtension("app.js", ".js");// "File extension matches"
// console.log(result3);
// const result4 = checkFileExtension("app.js", ".html");// "File extension does not match"
// console.log(result4);
// const result5 = checkFileExtension("index.html", ".html");// "File extension matches"
// console.log(result5);
// const result6 = checkFileExtension("index.html", ".css");// "File extension does not match"
// console.log(result6);
// const result7 = checkFileExtension("index.html", ".js");// "File extension does not match"
// console.log(result7);


// function getFileName(file) {
//   const index = file.indexOf(".");
//  if (index === -1) {
//    return file.slice();
//  } else {
//    return file.slice(0, index);
//   }
// }
// const result1 = getFileName("styles.css");//"styles"
// console.log(result1);
// const result2 = getFileName("app.js");//"app"
// console.log(result2);
// const result3 = getFileName("app");//"app"
// console.log(result3);
// const result4 = getFileName("index.js");//"index"
// console.log(result4);
// const result5 = getFileName("index.html");//"index"
// console.log(result5);
// const result6 = getFileName("index.css");//"index"
// console.log(result6);
// const result7 = getFileName("index");//"index"
// console.log(result7);


// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`
// }
// const result1 = createFileName(" order ", "txt");//"order.txt"
// console.log(result1);
// const result2 = createFileName("report ", "csv");//"report.csv"
// console.log(result2);
// const result3 = createFileName(" presentation", "xml");//"presentation.xml"
// console.log(result3);


// let count = 0;
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }
// console.log(count);


// function calculateTotal(number) {
//   let toNumber = 1;
//   let sum = 0;
//   while (toNumber <= number) {
//     sum += toNumber;
//     toNumber += 1;
//   }
//     return sum;
// }
// const result1 = calculateTotal(1);//1
// console.log(result1);
// const result2 = calculateTotal(3);//6
// console.log(result2);
// const result3 = calculateTotal(0);//0
// console.log(result3);
// const result4 = calculateTotal(18);//171
// console.log(result4);
// const result5 = calculateTotal(24);//300
// console.log(result5);
// const result6 = calculateTotal(5);// з випадковим числом повертає правильне значення
// console.log(result6);


// let count = 3;
// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count <= 5);


// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }


// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// const result1 = calculateTotal(1);//1
// console.log(result1);
// const result2 = calculateTotal(0);//0
// console.log(result2);
// const result3 = calculateTotal(7);// 28
// console.log(result3);
// const result4 = calculateTotal(18);// 171
// console.log(result4);
// const result5 = calculateTotal(24);//300
// console.log(result5);
// const result6 = calculateTotal(5);// з випадковим числом повертає правильне значення
// console.log(result6);


// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// const result1 = calculateEvenTotal(1);// 0
// console.log(result1);
// const result2 = calculateEvenTotal(3);// 2
// console.log(result2);
// const result3 = calculateEvenTotal(7);// 12
// console.log(result3);
// const result4 = calculateEvenTotal(18);// 90
// console.log(result4);
// const result5 = calculateEvenTotal(27);//182
// console.log(result5);
// const result6 = calculateEvenTotal(100);//з випадковим числом повертає правильне значення
// console.log(result6);


// function logNumbers(max, min) {
//   let sum = 0;
//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if(i % 2 === 0) {
//       sum += i;
//  console.log(i);
//     }
//   }
//   return sum;
// }
// console.log(logNumbers(max, min));


// const start = 2;
// const end = 11;
// function oneNumber(start, end) {
//   let number = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     // console.log(i);
//     break;
//   }
//   }
//   return number;
// }
// console.log(oneNumber(start, end));


// function findNumberFromFive(max, target) {
// 	// console.log("Log in the body of the function before the cycle");
//   let sum = target;
//   for (let i = 5; i <= max; i += 1) {
//     // console.log("Current counter value i:", i);
//     if (i === target) {
//       sum = i;
//       // console.log(`Found the number ${target}, interrupt the cycle`);
// 			break;
//     }
//   }
//   return sum;
//   // console.log("Log in body function after cycle");
// }
// const result = findNumberFromFive(10, 6);
// console.log(result);


function findNumber(start, end, divisor) {
  // let number = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      // number = i;
      return i;
    }
  }
}
const result1 = findNumber(2, 6, 5);// 5
console.log(result1);
const result2 = findNumber(8, 17, 3);// 9
console.log(result2);
const result3 = findNumber(6, 9, 4);// 8
console.log(result3);
const result4 = findNumber(16, 35, 7);// 21
console.log(result4);
const result5 = findNumber();// з випадковим набором чисел повертає правильний результат
console.log(result5);