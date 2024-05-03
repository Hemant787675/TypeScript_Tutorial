let ch: any="Hemant";
//This is dynamic type and in this variable we store any type of value as it seems.

ch=78;
console.log(ch);
ch=false;
ch={name:'Hemant'};
console.log(ch);

//We can also make array of Dynamic type

let combined:any[]=[];

combined.push(19);
combined.push('Hemant');
combined.push(true);

console.log(combined);

//We can also make Objects's property with dynamic type
let obj:{name:any, age:any};

obj={name:'Ajay',age:'22'}
console.log(obj);

obj={name:'Jay',age:'20'};
console.log(obj);

