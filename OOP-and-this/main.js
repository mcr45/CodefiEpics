/* classes and this */
class Car{

_miles=0    
    constructor(model,age){
        this.model=model,
        this.age=age
    }

    move(x){
        return this._miles=this._miles+x

    }

    describe(){
        console.log(`This is a ${this.model} type of car with ${this.age} years on the road`)
    }


}/* 
classes and prototype */
let tesla= new Car('tesla',2)
Car.prototype.fill=function(){
    console.log(this.model)
}
tesla.fill()
console.log(tesla.move(6))
tesla.describe()
let faketesla=tesla.describe
faketesla()
setTimeout(tesla.describe,1000)
setTimeout(()=>{
    tesla.describe()
},1000)

console.log(tesla._miles)
/* 
embracing oop tech */

class PLaylist{
 _video
 _duration

constructor(owner){
this.owner=owner
}

 addVideo(video,duration){
this._video=video
this._duration=duration
}

totalDuration(){
    return this._duration
}
averageDuration(){
    return this._duration/this._video
}
describe(){
    console.log(this.owner)
}

}
let newP=new PLaylist('john')

function contextDemonstrator(fun){

fun()


}

contextDemonstrator(()=>{newP.describe()})
let bindfun=newP.describe.bind(newP)
contextDemonstrator(bindfun)
contextDemonstrator(newP.describe)