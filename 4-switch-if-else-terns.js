if(4==9){
    console.log('цей блок виконується, якщо умова істинна')
} else{
    console.log('цей блок виконується, якщо умова хибна')
}


if(9==9){
    console.log('цей блок виконується, якщо умова істинна')
}

    if(null){
        console.log('цей блок виконується, якщо умова істинна')
    } else{
        console.log('цей блок виконується, якщо умова хибна')
    }

    let num = 101;

    if(num < 49){
        console.log('менше 49')
    } else if (num > 100){
        console.log('більше 100')
    }
    else {
        console.log('ok')
    }



    // (true) ? <цей блок виконається, якщо умова істинна>
    (1===1) ? console.log('цей блок виконається, якщо умова істинна') : console.log('цей блок виконається, якщо умова хибна');

    
let number = 5000;

switch(number){
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break;
    case 500:
        console.log('Value = 500');
        break;
    default:
        console.log('Default output');
        break;
}

