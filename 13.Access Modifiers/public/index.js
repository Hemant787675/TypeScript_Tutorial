"use strict";
class dept {
    constructor(a, b, c) {
        this.name = a;
        this.office = b;
        this.hod = c;
    }
    result() {
        return `${this.name} department has ${this.office} offices and has ${this.hod} HOD's.`;
    }
}
const obj = new dept('Sales', 3, 4);
console.log(obj)
