let a = 5;
let b = 3;
let c;

// ...

c = a + b;
console.log(c)

// ... 

a = 15;
b = 13; 
console.log(c)

// ....

// при повторі роблять це 

function sum(a, b){
    let c = a + b;
    console.log(c)
}

sum(15, 13)
sum(1, 2)
sum(1444, 24444)


//let person = {
//    name: 'Vika'
//}

let sumResult = (1, 2);
console.log(sumResult)

function someFn(a, b){
    let c = a + b; // тіло функції

    return c;
}

let sumResult2 = someFn(1, 2); // все одно що =с
console.log(someFn(10, 20))

// anonim fn // анонімна функція
//function (a, b){
//    let c = a + b; 

//    return c;
//}

const anonimFn = function (a, b){
    let c = a + b; 

    return c;
}

console.log(anonimFn(2, 4)) //указали змінні 2 та 4

// стрілочний 
// arrow fn
//() => {}


const arrowFn = (a, b) => {
    let c = a + b; 

    return c;
}
console.log(arrowFn(3, 4))


const arrowFunc = (a, b) => {
    return a * b 
}
console.log(arrowFunc(3, 4))


const arrowFunc1 = (a, b = 2) => {
    return a * b 
}
console.log(arrowFunc1(3))


const arrowFunc2 = (a, b = 2) => {
    return a * b 
}
console.log(arrowFunc2(3, 5))

// ? проверить, не поучилось
const playWithReturnFunc = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);

        if(i === 6){
            return `Iterator = ${i}`
        }
    }
}
console.log(playWithReturnFunc())

// запит часу, можно передавати потрібний
console.log(Date())


const myReqestWithDate = (field1, createdAt = Date()) => {

    //...

    let reqestBody = {
        someKey1: 1,
        someKey2: 2, 
        timestamp: ''
    }

    reqestBody.someKey1 = field1;
    reqestBody.timestamp = createdAt;

    // send request 

    return reqestBody
}
console.log(myReqestWithDate(123, 123334444))


// dd/mm/yyyy

// отсрочка виконання функції
function someFunc(){
    console.log('Привіт')
}
setTimeout(someFunc, 5000)
console.log('123')


function first(){
    setTimeout(function (){
        console.log('First output') 
    }, 5000)
}

function second() {
    console.log('Second output')
}

first();
second();


function someWithCallback(param1, CallbackFunc){
    console.log('Here is my param: ${param1}');

    callbackFunc();
}

someWithCallback('value1', function(){
    console.log('Text from callback')
})

