
// program 1
// function additionA(){
//     console.log("addition A")
// }

// function additionB(){
//     console.log("addition B")
// }
// additionB()
// additionA()

// program 2
function additionA() {
    console.log("addition A")
}
function additionB() {
    // async behaviour
    setTimeout(function () {
        console.log('addition B')
    }, 3000)
}

additionB()
additionA()


// program 3 
//      A        B          C
// user created ,userid ,user info

function getInfo() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)

    setTimeout(function () {
        console.log('user id')
    }, 2000)

    setTimeout(function () {
        console.log('user info')
    }, 1000)

}
//getInfo()

// async function in sync -- call back hello
function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('user id')
            setTimeout(function () {
                console.log('user info')
            }, 1000)
        }, 2000)
    }, 3000)
}
getInfo()
