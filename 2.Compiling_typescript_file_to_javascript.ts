// First we need to create a Typescript File using .ts extension such as: First.ts

// Then we can write write th follwoing script

const ch="Hemant";
console.log(ch);
// We can define the variables same as in JS just we need to compile it with this command: tsc <filename>
//For example: 
//tsc compilation_typescript_to_js.ts
 
//It will generate a Javascritp file with same name

//We can  link that file with an Html file such as this file: index.html

//We can  see the outputs in console by inspecting

//or we can simply see the output through by this command: node <filename>.js

const li=document.querySelectorAll('li');

console.log(li)

li.forEach(i=>{
    console.log(i);
})
 
