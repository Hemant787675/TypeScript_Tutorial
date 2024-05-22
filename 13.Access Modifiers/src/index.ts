
class dept{
    public name: string; //It allows to access or change the value inside or outside of a class

    private office: number;// It allows us to acces only in class

    readonly hod: number; //It only facilitates to read inside or outside of class

    constructor (a:string, b:number, c:number){
    this.name=a;
    this.office=b;
    this.hod=c;
    }



    result(){
        return `${this.name} department has ${this.office} offices and has ${this.hod} HOD's.`
    }
}

const obj=new dept('Sales', 3,4);
//obj.office=9; Property 'office' is private and only accessible within class 'dept'.
//obj.hod=8; Cannot assign to 'hod' because it is a read-only property
