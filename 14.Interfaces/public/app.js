"use strict";
const d = {
    name: 'Finance',
    emp: 10,
    expenses(exp) {
        console.log(exp);
    }
};
const fun = (dep) => {
    console.log(`The company has ${dep.emp} employees in ${dep.name} department.`);
};
fun(d);
