class Car{ //This is is a class here and following are the properties
    company:string;
    color:string;
    cc:number;

    //We are definig class properties with contructor parameters
    //So, when we will create an object the constructor will take all the values and assign it to this.company, this.color, this.cc
    constructor(a:string, b:string, c:number){
        this.company=a;
        this.color=b;
        this.cc=c;
    }

    format(){
       return `I have ${this.company} company's car in ${this.color} color and has ${this.cc}cc.`;
    }
}

const ins=new Car('volvo','black',2500);//Instance of a class here, based on class above
 
console.log(ins);

let car:Car[]=[];
car.push(ins);//We can push our instance of a class into an array

console.log(car);

//We can also change the property's value using that instance
ins.company='Mercedes';
ins.color='Gray';
console.log(car);
