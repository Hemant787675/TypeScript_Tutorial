"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emp = void 0;
class emp {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    res() {
        return `${this.name} gets ${this.salary}`;
    } //res function is returning a template string
}
exports.emp = emp;
