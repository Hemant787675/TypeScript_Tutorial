//Interfaces in TypeScipt
//It aloows us to specify the structure of an object for future or the object should have
interface dept{
    name:string;
    emp: number;
    expenses(exp:number):void;
}


//There will be an error if d does not match the structure of dept interface
const d:dept={
    name:'Finance',
    emp:10,
    expenses(exp:20000):void{
        console.log(exp);
    }
}


//Using d object as a parameter in function
const fun=(dep:dept)=>{
    console.log(`The company has ${dep.emp} employees in ${dep.name} department.`);
}

fun(d);
