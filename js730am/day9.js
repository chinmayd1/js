
// Promise.all 

Promise.all([
    Promise.resolve('hello'),
    Promise.reject('hello2'),
    Promise.resolve('hello3')
])
.then(function(arr){
    console.log(arr)
})
.catch(function(){
    console.log("error state ..")
})


// Promise race 

function promiseOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello...")
        },3000)
    })
}

function promiseTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello...2")
        },2000)
    })
}

function promiseThree(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye")
        },1000)
    })
}


Promise.race([
    promiseOne(),
    promiseTwo(),
    promiseThree()
])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

// Promise.allSettled()

// resolve - value 
// reject - status
// Promise.allSettled([
//     promiseOne(),
//     promiseTwo(),
//     promiseThree()
// ])
// .then(function(result){
//     console.log(result)
// })

// Promise.any()

// first resolve state ---> short circuit and completelty ignores reject state

Promise.any([
    promiseThree(),
    promiseOne(),
    promiseTwo(),
])
.then(function(str){
    console.log(str)
})