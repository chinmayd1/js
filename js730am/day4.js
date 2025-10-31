// Lexical scope
// function additionA() {
//     console.log("addition A is called")
//     function additionB() {
//         console.log("addition B i called")
//         function additionC() {
//             console.log("addition C is called")
//         }
//         additionC()
//     }
//     additionB()
// }
// additionA()


// function additionA(){
//     let a  = 10 
//     let b = 5
//     console.log(a + b)
//     function additionB(){
//         let s = 6
//         let t  = 3
//         console.log(h)
//         console.log(a + b + s + t)
//         function additionC(){
//             let h = 9
//             console.log(a+b+s+t+h)
//         }
//         additionC()
//     }
//     additionB()
// }
// additionA()

// let , const , var keyword 

// let and var are similar in assignemt
let a1 = 10 
console.log(a1)
a1 = 200
console.log(a1)

var j = 90
console.log(j)
j = 9000
console.log(j)

// const k1 = 900
// console.log(k1)
// k1 = 9990

// program 2
// let and const are blocked scope


let d = 10 
let g = 9

{
    let g = 8
    console.log(g) // 8
}
console.log(g) // 9


let f  = 10
{
    let f = 90
    console.log(f) // 90
} 
console.log(f) // 90

// let l = 90
// {
//     let l = 89
//     console.log(l) // 89
//     l = 99
// }
// l = 900
// console.log(l) // 900


const j1 = 100 
const k1 = 800
console.log(j1)
{
    const k1 = 900
    console.log(k1) // 900
}
console.log(k1) // 800

const k2 = 900
{
    const k2 = 899
    console.log(k2)  // 899
}
console.log(k2) // 900

// let and const are blocked scoped
// var is functioned scope 

var  k3 = 500
function additionA(){
    var k3 = 10
    console.log(k3)
}
additionA()
console.log(k3)


var k4 = 10
function additionC(){
    console.log(k4) // 10
    k4 = 9000
    console.log(k4) // 9000
}
console.log(k4) // 10
additionC()
console.log(k4) // 9000


var k5 = 99
function additionC(){
    var k5 = 9000
    console.log(k5)
    k5 = 70
    console.log(k5)
}
console.log(k5) 
additionC()
console.log(k5) 