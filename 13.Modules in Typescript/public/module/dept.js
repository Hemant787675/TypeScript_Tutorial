"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dept = void 0;
class dept {
    //We can also define properties of class by using constructor only
    constructor(dep, hod, office) {
        this.dep = dep;
        this.hod = hod;
        this.office = office;
    }
    fun() {
        return ` The ${this.dep} department has 2 ${this.hod} and 3 ${this.office}`;
    }
}
exports.dept = dept;
