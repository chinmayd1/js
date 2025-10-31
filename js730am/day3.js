// object
let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 23,
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}
let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23,
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }

}
console.log(amol)
console.log(chinmay)


// function contructor 

// function Person(fn,ln,age){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.age = age
//     // this.displayName  = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }
// let amol2 = new Person("amol","rao",23)
// let chinmay2 = new Person("chinmay","deshpande",44)

// console.log(amol2)
// console.log(chinmay2)

// amol2.displayName()
// chinmay2.displayName()


// program 2


// function Person(fn,ln,age){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.age = age
//     //this.displayName  = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol2 = new Person("amol","rao",23)
// let chinmay2 = new Person("chinmay","deshpande",44)

// console.log(amol2)
// console.log(chinmay2)

// Person.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }

// // Every object has __proto__ == Parent.prototye
// console.log(amol2.__proto__  == Person.prototype)
// console.log(chinmay2.__proto__  == Person.prototype)


// amol2.displayName()
// chinmay2.displayName()




// program 3 

// let names = ["chinmay","sarika","shirish"]
// console.log(names)
// names.push('mansi')
// console.log(names.__proto__ == Array.prototype)
// Array.prototype.hello = function(){
//     console.log("hello sangamner")
// }

// let city = ["pune","mumbai","nagar"]
// city.hello()
// console.log(city.__proto__ == Array.prototype)


// Es6 class 
// class Person {
//     constructor(fn, ln, age) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age

//     }
//     // parent.prototype
//     displayName = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol3 = new Person("amol3", "rao", 123)
// let amol4 = new Person("amol4", "rao4", 123)

// console.log(amol4)
// console.log(amol3)

// amol4.displayName()
// amol3.displayName()



// program 4
//Object.create method
let info = {
    infoPage:function(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
    }
    ,
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let objectCreated = Object.create(info)
console.log(objectCreated)
objectCreated.infoPage("chinmay","deshpande",45)
objectCreated.displayName()

// Prototype inheritance 
// object literal
// function contructor 
// Es6 class
// Object.create Method








