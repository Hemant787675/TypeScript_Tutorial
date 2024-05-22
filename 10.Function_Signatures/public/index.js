"use strict";
let func;
//Function Signature allows a variable to hold any type of function such as above func variable
let func2;
func2 = (name, age) => {
    console.log(`${name} is ${age} years old.`);
};
let func3;
func3 = (num1, num2, operator) => {
    if (operator === 'multiply') {
        return num1 * num2;
    }
    else {
        return num1 + num2;
    }
};
//Object as a parameter
let details;
details = (object) => {
    console.log(`${object.name} is ${object.age} years old.`);
};
