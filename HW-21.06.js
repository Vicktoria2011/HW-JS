/* 
1. Ви прийшли в Макдональдз з трьома друзями.
Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
то виводити в консоль текст "Ми йдемо в інше кафе"
(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function checkMeal(gamburgers, friesPotatos) {
    if (gamburgers >= 4 && friesPotatos >= 1) {
      return 'Ми поїли';
    } else if (gamburgers < 4 || friesPotatos < 1) {
      return 'Ми йдемо в інше кафе';
    }
  }
  
  console.log(checkMeal(4, 1)); // "Ми поїли"
  console.log(checkMeal(3, 0)); // "Ми йдемо в інше кафе"

/* 
2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 
та 1900 включно. Результат виводити в консоль
*/

function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
      return 'значення ціни товару між 1000 та 1900 включно';
    }
  }
  
  console.log(checkPrice(1000)); 

/* 
3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться 
між 1000 та 1900 включно.
Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
Результат виводити в консоль.
*/

//1
function checkPrice(priceRandom) {
    let priceMin = 1000;
    let priceMax = 1900;
    if (!(priceRandom >= priceMin && priceRandom <= priceMax)) {
      return 'значення ціни товару не знаходиться між 1000 та 1900 включно';
    }
  }
  
  console.log(checkPrice(2000)); 

//2
let priceRandom1 = 1900;
let priceMin1 = 1000;
let priceMax1 = 1900;

if((priceRandom1 <= 1000) || (priceRandom1 >= 1900)){
    console.log('значення ціни товару не знаходиться між 1000 та 1900 включно')
}

//3
function checkPrice(price) {
    if (price <= 1000 || price >= 1900) {
      return 'значення ціни товару не в діапазоні між 1000 та 1900 включно';
    }
  }
  
  console.log(checkPrice(1000)); 


/*
4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
Результат виводити в консоль.
*/

function checkSeason(season) {
    let winter = 0;
    let spring = 1;
    let summer = 2;
    let autumn = 3;
    
    if (season === winter) {
      return "Сейчас зима";
    } else if (season === spring) {
      return "Сейчас весна";
    } else if (season === summer) {
      return "Сейчас лето";
    } else if (season === autumn) {
      return "Сейчас осень";
    } else {
      return "Value does not exist";
    }
  }
  
  console.log(checkSeason(3));

/*
5. Задано 3 числа (a, b, c), які не рівні між собою.
Визначити середнє мід цими трьома числами
(не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) 
використовуючи оператор if-else.
Використати вкладені оператори if
Результат виводити в консоль.
*/

function findMiddleNumber(a, b, c) {
    if (a > b && b > c) {
      return "Середне число по значенню b";
    } else if (b > a && a > c) {
      return "Середне число по значенню a";
    } else if (a > c && c > b) {
      return "Середне число по значенню c";
    }
  }
  
  const a = 5;
  const b = 9;
  const c = 3;
  console.log(findMiddleNumber(a, b, c));  


/*
6. Задано номер дня тижня.
За заданим номером вивести назву дня тижня використовуючи switch.
Результат виводити в консоль.
*/

function DayOfWeek() {
    const day = new Date().getDay();
  
    switch (day) {
      case 0:
        return "Воскресенье";
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      case 6:
        return "Суббота";
    }
  }
  
  console.log(DayOfWeek()); 

/*
7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, 
символ математичної операції.
Математичні операції для обчислення: "+", "-", "*", "/".
Результат виводити в консоль.
*/

function calculate(a, b, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }
  
    return result;
  }
  
  const a1 = 2;
  const b1 = 1;
  const c1 = '+';
  console.log(calculate(a1, b1, c1)); 

/*
8.* Використовуючи властивості рядків (тип string), та регулярний вираз 
(regular expression) видалити голосні букви зі слова.
*/

function removeVowels(text) {
    return text.replace(/[а, е, є, и, і, о, у, ю, я]/gi,'');
  }
  
  console.log(removeVowels("ГідроелектростанціЯ"));

/*
9.* Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
так щоб в консоль виводився результат обчислень з правильним закінченням.
Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
 

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


function convert(metr) {
    let km = metr / 1000;
  
    if (km >= 1) {
      console.log(metr + " метрів = " + km + " кілометр");
    } else if (km >= 0.5) {
      console.log(metr + " метра = " + km + " кілометра");
    } else {
      console.log(metr + " метра = " + km + " кілометрів");
    }
  }
  
  convert(32);