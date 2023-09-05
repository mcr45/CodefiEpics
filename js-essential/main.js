
let y=10


{/* 
block level */

var x='zero'
let y='one'
const z='two'

function varScope(){
    var x=0
    let y=1
    const z=2
    console.log(y)//1
}

    console.log(y)//one


}

console.log(y)//10
/* 
hoisting */

console.log(cat)//cat is initialized to undefined
console.log(dog)//dog is not inizialized, same if it was a const

jump()//function works before being declared

var cat="miao"
let dog='bark'

function jump(){
    console.log('Jump')
}