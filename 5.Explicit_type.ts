//When TypeScript handles operation, then this type casting is known as explicit type. Implicit, when TypeScript handles the operation.

let nam: string;
let age: number;
//nam and age variables are explicitly declared

//We cannot give nam an integer value cause it has been declared as string
//nam=56;

nam='Ajay';//correct one
age=20;

//We can also typecast array in TypeScript
let arr:string[];

arr.push('Aman');
//This will throw an error in console after executing that compiler JAva
console.log(arr)

//Union Types
let arr2:(string|number)[]=[]
//This array can take string values as well as number

//union types 
let un:(string|number|boolean)[]=[];
un.push('Ajay');
un.push(67);
un.push(true);

let rollNo:string|number;
rollNo=8999;
rollNo='jhh';

//Objects
let obj:object;//Here we have declared object
obj={name:'Jay', age:19};
obj=[]//array is also an object in TypeScript, we are able to pass array here

//obj=9; //incorrect, does not match object structure

let obj2:{
name:string,
age:number,
}//here we have specified property's type
