

// function additionA(){
//     console.log("additionA")
// }
// function additionB(){
//     console.log("addition B")
// }

// additionA()
// additionB()

// function additionC(){
//     console.log("additionC")
// }

// function additionD(){
//     setTimeout(function(){
//         console.log("addtionD is called")
//     },5000)
// }
// additionD()
// additionC()

// async code --- sync

function userInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)


    setTimeout(function () {
        console.log("user id")
    }, 2000)

    setTimeout(function () {
        console.log("use info")
    }, 1000)

}

//userInfo()



// call back hell



function userInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("user id")
            setTimeout(function () {
                console.log("use info")
            }, 1000)

        }, 2000)
    }, 3000)
}

//userInfo()

// Promises ---> resolve reject pendind
// .then() , async await


let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("A i called")
    }
    else {
        reject("None is called")
    }
})

// consume the promise
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
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
//     console.log("finally is called")
// })


// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("finally is called")
// })


function userCreated() {
    return new Promsise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
}

function getId() {
    return new Promsise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get Id")
        }, 2000)
    })
}

function getInfo() {
    return new Promsise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get Info")
        }, 1000)
    })
}


// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("error")
// })
// .finally(function(){
//     console.log("finally ..")
// })


async function getInfo() {
    try {
        let str = await userCreated()
        console.log(str)
        let str2 = await getId()
        console.log(str2)
        let str3 = await getInfo()
        console.log(str3)
    }
    catch {
        console.log('error caught')
    }

}

getInfo()