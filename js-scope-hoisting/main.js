
let globe //everywhere
function scopeTest(){
if(globe){
    var funScope // inside function(outside block)
}
else{
const withIn='okay' //inside block
}
}
hoistingTest()
function hoistingTest(){
    console.log(dog)
    console.log(cat)
    console.log(fish)
    var dog='puppy'
    console.log(dog)
    let cat='miao'
    const fish='blob'

}
console.log(bird)
function hoistingChallenge(){

if(true){
    function whatIf(){
        console.log('you cannot')
    }
   }
whatIf()
let bird='fly'

}


/* 
    Implement a function named scopeTest that:
        Declares a variable in global scope, inside a block (like an if statement), and within a function.
        Tries to access these variables from different locations to see where they are and aren't accessible.
        Commit: "Demonstrated variable scope".

    Implement a function named hoistingTest that:
        Uses a variable before declaring it with var, then after its declaration.
        Repeats the above with let and const to observe differences.
        Declares a function before and after calling it to observe hoisting behavior.
        Commit: "Demonstrated hoisting".

    Design a function named hoistChallenge that combines the aspects of scope 
    and hoisting in a slightly complex manner. For instance, declare a function 
    inside a block and see if it's accessible outside the block, or use a variable
     before it's declared inside a function to check hoisting intricacies.
        Commit: "Completed hoistChallenge exercise". */