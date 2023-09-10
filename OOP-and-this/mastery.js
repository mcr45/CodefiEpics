


class Car{

    constructor(make,model,year){
        this.make=make
        this.model=model
        this.year=year
    }

    displayINfo(){
        console.log(`${this.make} was made in ${this.year} and is a ${this.model} model`)
    }

    modifYear(x){
        this.year=this.year+x
    }

    newModel=(newM)=>{
        this.model=newM
        this.displayINfo()
    }
}

let brum=new Car('tesla','Hssi',2000)
brum.displayINfo()
setTimeout(brum.displayINfo,500)// not working as intended
let funcbind=brum.displayINfo.bind(brum)
setTimeout(brum.displayINfo,1000)// now it does
brum.newModel('Lambo')
/* 
elettric car subclass */
class Eletric extends Car{

constructor(make,model,year,batteryLife){
    super(make,model,year)
    this.batteryLife=batteryLife
}
displayINfo(){
    super.displayINfo()
    console.log(` and has ${this.batteryLife} battery life`)
}
}

let elec=new Eletric('tesla','HAUD',2012,89)
elec.displayINfo()

/* 
student and this demo */

class Student{
    constructor(name,course){
        this.name=name
        this.course=course
    }

    describe(){
        console.log(`${this.name} and I study ${this.course}`)
    }
changeCourse=(courseN)=>{
    this.course=courseN
}

}

let stud=new Student('john','math')

stud.describe()

let descbind=stud.changeCourse.bind(stud)
setTimeout(descbind,1000)
