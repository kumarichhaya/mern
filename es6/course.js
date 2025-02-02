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

let c1= new Course('Excel',1,3500);
let c2= new Course('Web Designing',2,5500);
c1.showCourse();
c2.showCourse();

