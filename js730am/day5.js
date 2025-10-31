
// // function declaration 
// function additionA(x, y) {
//     return x + y
// }
// additionA(12, 3)
// // function expression 
// let additionB = function (x, y) {
//     return x + y
// }
// additionB()
// // arrow function 
// let additionC = (x, y) => {
//     return x + y
// }
// additionC(23, 4)

// // actual difference between arrow function and function expression
// var firstName = "vijeet"
// var lastName = "dani"

// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     displayName: function () {
//         // this ----> info
//         console.log(this)
//         console.log(this.firstName + this.lastName)
//         let displayTwo = function(){
//             // this ---> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayTwo()
//     }
// }
// info.displayName()


// 2nd variation
// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     displayName: function () {
//         // this --> info
//         console.log(this.firstName + this.lastName)
//         let displayTwo = ()=>{
//             // this --> info
//             console.log(this.firstName + this.lastName)
//         }
//         displayTwo()
//     }
// }
// info.displayName()



// info -->---> this--->window
// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     displayName: ()=> {
//         // this ---> window
//         console.log(this.firstName + this.lastName)
//         let displayTwo = ()=>{
//             // this ---> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayTwo()
//     }
// }
// info.displayName()

// closures

function additionA(){
    let x = 10
    let y = 5 
    return function(){
        return x + y
    }
    console.log('bye')
}
e = additionA()

// e = function(){

//         return x + y
//     }

console.log(e())