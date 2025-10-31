// async sync 


// function additionA(){
//     console.log("addition A")
// }

// function additionB(){
//     console.log("additionB")
// }

// additionA()
// additionB()


// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()

// function getInfo() {
//     setTimeout(function () {
//         console.log("user create")
//     }, 3000)

//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("get info")
//     }, 1000)
// }

// getInfo()


// function getInfo() {
//     setTimeout(function () {
//         console.log("user create")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// getInfo()

// promises 


// pending , resolve , reject 


// program then
// let pro1 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10

//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject('bye')
//     }
// })

// // consuming the promise
// pro1.then(function(str){
//     console.log(str)
// } , function(str){
//     console.log(str)
// })



// program 2
// then catch 

// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro2
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// then catch finally

let pro3 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})


pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})