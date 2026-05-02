/* factory function se code to kafi reuseable bn gya or abhi bhi hr object ke liye alag
se copy ja rhi hai 
*/

function Studentss(name,age){
    const student={
        name:name,
        age:age,
        talk:function(){
            console.log(`${name} is speaking`)//agr function mei kuch bhi return nhi 
            // bydefault undefined print hota hai 
        }
    };
    return student;
}

let s1=Studentss("deepanshu",20)//isme ye problem hai ki hr object ke pass apni copy jati hai 
let s2=Studentss("harshit",20)
console.log(s1.talk===s2.talk)//false har object ke paas alag function copy hai

// ye hi hai disadvantages ek object bnane ke baad bhi sabhi ka function alg alg store ho rha hai

//console.log(s1.talk()===s2.talk()) // isme undefined=undefined to true hoga print
