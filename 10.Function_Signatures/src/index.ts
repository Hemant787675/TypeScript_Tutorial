let func: Function;
//Function Signature allows a variable to hold any type of function such as above func variable

let func2:(x:string, y:number)=>void;

func2=(name:string,age:number)=>{
    console.log(`${name} is ${age} years old.`);
}

let func3:(x:number, y:number, z:string)=>number;

func3=(num1:number, num2:number, operator:string)=>{
if(operator==='multiply'){
    return num1*num2;
}else{
    return num1+num2;
}
}


//Object as a parameter
let details:(obj:{name:string, age:number})=>void;

//We can also explicitly type here
type empDetails={name:string, age:number};

details=(object:empDetails)=>{
console.log(`${object.name} is ${object.age} years old.`)
}
