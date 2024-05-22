let fun: Function;//Here we  have specified the type function

fun=()=>{
console.log('Arrow function')
}

fun();

//We can specify the type of parameters in function
const div=(x:number, y:number, z:number=8):void=>{
    console.log(x/y);
    console.log(z);
}

div(15, 5, 10);

//We can also specify the type of return in  function, such as the 'number' type that has been written below after parentheses
const mul=(a:number, b:number):number=>{
    return a*b;
}

let r=mul(9,8);
