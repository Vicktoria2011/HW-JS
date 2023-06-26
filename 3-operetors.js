console.log('Hello' + 'world')

console.log(2 + 2)

console.log('2' + 2)

console.log(2 + + '2')

console.log(2 + + '2')

// додавання та контетинація


// інкремент та дикремент

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr)
console.log(decr)

++incr;
--decr;

console.log(incr)
console.log(decr)

// додає числа
let incr1 = 10;
let decr1 = 10;

console.log(incr1++)
console.log(decr1--)

console.log(++incr1)
console.log(--decr1)

console.log(5 < 2)
console.log(5 > 2)
console.log(2*4)
console.log(2*4 == 8)
//console.log(2*4 = 8) // error


console.log(2*4 == 8)
console.log(2*4 == '8')  // нестроге порівняння
console.log(2*4 === '8') // строге порівняння - приведення до одного типу

console.log(2*4 != '8')
console.log(2*4 != '9')


// логічне і  та логічне або 
// let isChected = true;
//let isClosed = true;

console.log(isChected && isClosed)

// let isChected = false;
// let isClosed = true;

// console.log(isChected && isClosed) // логічне і
// console.log(isChected || isClosed) // логічне або

console.log(isChected && !isClosed) // логічне і
console.log(!isChected || isClosed) // логічне або


let isChected = true;
let isClosed = false;

console.log(isChected && !isClosed) // логічне і
console.log(!isChected || isClosed) // логічне або




// я хочу купити картоплю та гамбургер. якщо обидва товари є в наявності, 
//я їх купую та буду ситим
// картоплю та гамбургер = змінні

let gamburger = true;
let fries = true;

if(gamburger&&fries){
    console.log('я ситий')
}
// я ситий

let gamburger1 = 1;
let fries1 = 1;

if(gamburger1&&fries1){
    console.log('я ситий')
}

let gamburger2 = 1;
let fries2 = 0;  // null, undefined, "", NaN

if(gamburger2&&fries2){
    console.log('я ситий')
}
// фальш

// я хочу купити або 3 гамбургера і колу або 2 порції нагетсів і дві картоплі фрі. 
// якщо щось з цього є, я їх купую та буду ситим

let gamburgers = 2;
let cola = 2;
let nuggers = 2;
let friesPotatos = 2;
if(gamburgers > 2 && cola || nuggers > 1 && friesPotatos > 1){
    console.log('всі поїли')
}






