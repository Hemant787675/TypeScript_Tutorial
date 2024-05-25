 export class dept{//We need to export this module, then we can use this module in  other module by importing such as: index

    //We can also define properties of class by using constructor only
    constructor(
public dep: string,
readonly hod: string,
private office: number
    ){}//It will return the class properties and values after creating an object along with classname

    fun(){
        return ` The ${this.dep} department has 2 ${this.hod} and 3 ${this.office}`
    }//This function will return the values
}
