//Generics in Typescript
//It allows us to reuse a block of code

const rollNo=<T extends {name:string}>(obj:T)=>{
    let roll_no=Math.floor(Math.random()*100);//It will generate a rollNo with the use of Math.random Method 
    return {...obj, roll_no}
}//It will return an object along with rollNo

let res= rollNo({name:'Aditya',age:12});

console.log(res);

//Generics with TypeScript
//The details will capture the type written along with interface info
interface info<T>{
    phoneNo:number;
    city:string;
    details:T;
}

const student:info<string>={
phoneNo:1234567891,
city: 'Shimla',
details:'Block:Shoghi'
}

console.log(student);

