import {obj} from '../interfaces/app.js';//importing interface

//class emp's structure should match
export class emp implements obj{
    public name: string;
    public salary:number;

    constructor(name:string, salary:number){
    this.name= name;
    this.salary=salary;
}

    res(){
        return `${this.name} gets ${this.salary}`;
    }//res function is returning a template string
}
