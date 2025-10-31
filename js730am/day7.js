
// aysnc vs sync
// async   ----> sync --->  call back ----> promises
// async code ----> sync --> call back ----> promises

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })



// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("finally blocked ....")
// })



let pro2 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello")
    }
    else {
        reject('bye')
    }
})
// ---> then() --> return ----> then()


// pro2
// .then(function(str){
//     console.log(str)
//     return "hello 2"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute .....")
// })

// program 2



function creatUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },1000)
    })
}

creatUser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(strs)
})
.finally(function(){
    console.log("executed ...")
})