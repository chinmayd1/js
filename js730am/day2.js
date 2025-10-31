
// Different ways to create object in js 
// Objects will have properties and method
// object literal 
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:12,
    displayName:function(){
        console.log(this.firstName+this.lastName)
    }
}
console.log(amol)
amol.displayName()

// function constructor 

function Person(firstName , lastName , age , rollNo){
    this.firstName = firstName
    this.lastName = lastName 
    this.age = age 
    this.rollNo = rollNo
    this.displayName  = function(){
        console.log(this.firstName + this.lastName)
    }
}
let amol2 = new Person("amol","rao",23,25)
let chinmay2  = new Person("chinmay2","deshpande2",34,55)
console.log(amol2)
console.log(chinmay2)

console.log(amol2.firstName)
console.log(amol2.lastName)
console.log(amol2.age)
console.log(amol2.lastName)
amol2.displayName()

// Es6 class 
class Person2 {
    constructor(fn,ln,age ,roll){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
        this.rollNo = roll
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amol3 = new Person2("amol3","rao3",34,44)
console.log(amol3)
console.log(amol3.firstName)
console.log(amol.lastName)
console.log(amol3.rollNo)
console.log(amol.age)
amol.displayName()

// Object create method
let amol4 = Object.create({})
console.log(amol4)

amol4.firstName = "amol4"
amol4.lastName = "rao4"
amol4.rollNo = 23
amol4.age  = 45
amol4.displayName  = function(){
    this.firstName + this.lastName
}
console.log(amol4)

// object literal 
// function contructor
// object.create method
// Es6 class 
// Prototype inheritance