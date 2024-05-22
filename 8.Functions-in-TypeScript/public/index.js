"use strict";
let fun; //Here we  have specified the type function
fun = () => {
    console.log('Arrow function');
};
fun();
//We can specify the type parameters in function
const div = (x, y, z = 8) => {
    console.log(x / y);
    console.log(z);
};
div(15, 5, 10);
//We can also specify the type of return in  function, the number that has been written below after parentheses
const mul = (a, b) => {
    return a * b;
};
let r = mul(9, 8);
