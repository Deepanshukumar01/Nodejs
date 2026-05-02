/*prototype
Prototype = ek object jo dusre objects ko properties/methods 
deta hai
example arr.push(4)
Tune array me push define nahi kiya to ye kha se aaya
Ye aaya hai Array ke prototype se

some important lines of protoype 
arr._proto_             give reference means copy
Array.prototype         actual object
*/

let a="abc"
let b="aaa"

console.log(a.toUpperCase===b.toUpperCase) //gives true because isme prototype kafunction compare hua
console.log(a.toUpperCase()===b.toUpperCase()) //gives false isme value compare hue

let arr=[4,3,1,5]
arr.__proto__
arr.__proto__.push=(n)=>{
console.log("pushing number"+ n )}
arr.push(7)
//aise tum apne code ke liye prototype change bhi kr skte ho



/* arr.__proto__ kro than
   hm function change bhi kr sakte hai 
   arr.__proto__.push=(n)=>{
    console.log("pushing number"+ n )}*/

// prototype mei object apni alg se same occupy nhi krte hai 
