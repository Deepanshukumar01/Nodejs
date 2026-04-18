// isme aise chije likho jo ki tumhe export krani ho 

// module.exports ek tarike se object hota hai

// module.exports="deepanshu this side"

/*let sum = (a,b)=>a+b
let sub = (a,b)=>a-b
let divi = (a,b)=>a/b


let obj={
    1:sum,
    2:sub,
    3:divi,
}
module.exports=obj*/

// or

let sum = (a,b)=>a+b
let sub = (a,b)=>a-b
let divi = (a,b)=>a/b

module.exports={
    1:sum,
    2:sub,
    3:divi,
}


// or hr function ke aage likh do 
module.exports.multiple=(a,b)=>a*b