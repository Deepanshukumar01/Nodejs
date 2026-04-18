/* process Node.js me ek built-in object hota hai:
isme current running program ki saari info hoti hai 
process ko access ke liye pahle node ke world mei aao than press process
process.argv bhi kaam ka hai iska example neeche hai
or ha hm process.argv ko node world  se access nhi krte terminal se hi jaise 
file run ki like node file.js a b c d to is baar location and user local bin kuch 
aata hai or jitne argument doge bo bhi aa jayege*/




let i=1

let k=process.argv

for (i=2;i<k.length;i++){
    console.log(k[i])
}

// ab agr node "1(process).js" a b c to 2+3 line print hogi terminal pe
