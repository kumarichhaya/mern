class Course{
    constructor(c,d,f){
        this.course=c;
        this.duration=d;
        this.fee=f;
    }
    showCourse(){
    console.log(`Course Name: ${this.course}, Course Duration: ${this.duration}, Course Fee :${this.fee}`)
    }
}
class Student extends Course{
    #rollno
    #name
    constructor(r,n,c,d,f){
        super(c,d,f);
        this.#rollno=r
        this.#name=n     }
    showInfo(){
        console.log(`Student Name: ${this.#name}, Roll No. ${this.#rollno}`)
        this.showCourse()
    }
    set rn(x){this.#rollno=x}   //setter
    get rn_(){return this.#rollno}  //getter
}
let st1= new Student(34,'Palak','Excel',1,3500);
let st2= new Student(36,'Kanika','Web Designing',2,5500);
st1.rn=40;
st1.showInfo();
st2.showInfo();
// console.log(st1.rollno) //private field
console.log(st1.rn_)



