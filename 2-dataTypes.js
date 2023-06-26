/**
 * Прості або примітивні
 * - числа
 * - рядки (тексти)
 * - логічний тип
 * - null
 * - undefined
 * - Symbol
 * - BigIng
 * 
 * - Об'єкти:
 * спеціальні об'єкти (або глобальні ):
 * - массиви
 * - функції
 * - об'єкт дати
 * - регулярні вирази
 * - помилки
 * Звичайні об'єкти:
 * -об'єкт {}
 */

// числа
let number = 5;
let floatNumber = 5.5;

// рядки (тексти)
console.log(4/0); //Infinity
console.log(-4/0); //-Infinity

console.log('string'*3); //NaN / Not a Number

// логічний тип
let isExist = true; // false


// null

console.log(someVar);
// someVar is not defined

let value1 = null;
console.log(value1)
// null


// undefined

let udef1;
console.log(udef1)
// undefined

let value = null;
console.log(value);
let udef = 1;
console.log(udef)
// null
   1

let obj = {};

//let person = {
//    name: 'Dmytro'
//    age: 28
//}

// let person1 = new Object();
// console.log(person1)
// person1.name = "Fred";
// person1.age = 42;
// пусті дані {}

// let person1 = new Object();
// console.log(person1)
// person1.name = "Fred";
// person1.age = 42;
// console.log(person1)
// є дані {} { name: 'Fred', age: 42 }

// ?? не получилось?
console.log(person.name)
console.log(person.age)


массив
let arr = []; 1, 2, 3, 4

let arr1 = ['text', 6, {}, []]
console/log(arr1) 
console/log(arr1[0]) // перший елемент масива
console/log(arr1[1]) // другий елемент масива

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};

console.log(numArr[0])
console.log(numObj.a)

// let someArr = [1, 2, 3, 4]
// let someArrObj = {
   // 0: 1,
   //  1: 2,
   // 2: 3,
   //  3: 4
// }
// console.log(someArr[0])
// console.log(someArrObj[0])


let rozetkaSearchAutocomplite = {
    "data": {
        "code": 1,
        "content": {
            "text": "noki",
            "changedText": "noki",
            "tpl_name": "one_plus_word",
            "records": {
                "words_additions": [
                    {
                        "name": "nokia c31 чехол",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+c31+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                    },
                    {
                        "name": "nokia flip",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+flip"
                    },
                    {
                        "name": "nokia 6310",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+6310"
                    },
                    {
                        "name": "nokia g21 чехол",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                    },
                    {
                        "name": "nokia g21",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21"
                    }
                ],
                "cats_searches": [
                    {
                        "id": "80037",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Телевізори</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80037&redirected=1",
                        "category_title": "Телевізори"
                    },
                    {
                        "id": "80027",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Навушники</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80027&redirected=1",
                        "category_title": "Навушники"
                    },
                    {
                        "id": "80003",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Мобільні телефони</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80003&redirected=1",
                        "category_title": "Мобільні телефони"
                    }
                ]
            },
            "count": 8,
            "total_count": 0,
            "page": 0,
            "start": 0,
            "sections_menu": [],
            "move_to_category": "Перейти в категорію",
            "price_with_promo": "Ціна з промокодом",
            "sudg_noth_to_find": "По вашому запиту нічого не знайдено. <nobr>Уточніть свій запит",
            "all_find_result": "Всі результати пошуку",
            "currency": "грн"
        }
    }
}

console.log(JSON.stringify(categoryes))

// console.log(rozetkaSearchAutocomplite.data.content.records.words_addition[0])

// console.log('пошуковий запит: ' + rozetkaSearchAutocomplite.data.content.text)
// console.log('перший товар з пошукової видачі: ' rozetkaSearchAutocomplite.data.content.records)
// console.log('перша категорія: ' + rozetkaSearchAutocomplite.data.content.records.cats_searches[0].name)



let someText = " Hello World"

console.log(someText.length);
console.log(someText.substring(1, 6));
console.log(someText.toLocaleLowerCase());
console.log(someText.toUpperCase());
console.log(someText.indexOf('H'));
console.log(someText.trim());
console.log(someText.charAt(1));
console.log(someText[1]);

// створити рядок
let myArr = [];

myArr.push('Доброго')
myArr.push('')
myArr.push('вечора')

console.log(myArr)
console.log(myArr.length)
console.log(myArr.join(" "))
console.log(myArr.pop())
console.log(myArr)

// округление
let someNumber = 12.45678;

console.log(Math.round(someNumber))
console.log(someNumber.toFixed(2))

let resolution = "12.2px"

console.log(parseInt(resolution))
console.log(parseFloat(resolution))


