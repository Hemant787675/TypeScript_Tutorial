"use strict";
//Generics in Typescript
//It allows us to reuse a block of code
const rollNo = (obj) => {
    let roll_no = Math.floor(Math.random() * 100); //It will generate a rollNo with the use of Math.random Method 
    return Object.assign(Object.assign({}, obj), { roll_no });
}; //It will return an object along with rollNo
let res = rollNo({ name: 'Aditya', age: 12 });
console.log(res);
const student = {
    phoneNo: 1234567891,
    city: 'Shimla',
    details: 'Block:Shoghi'
};
console.log(student);
