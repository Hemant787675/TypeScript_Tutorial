type StringOrNum= string | number;
//TypesScript type aliases provides custom names for types.
type obj={Name:string, Id:StringOrNum};// This is a custom object here

const details=(emp:obj)=>{
    console.log(`Hy ${emp.Name}, your id is ${emp.Id}`);
}

const empDetails:obj={
    Name:"Ajay",
    Id:420
};

details(empDetails)
