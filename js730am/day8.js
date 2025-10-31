

// promise 

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello")    
        },3000)
    })
}
