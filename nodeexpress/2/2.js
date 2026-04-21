/*topic 1
express ek node js web application framework hai jo help krta hai web 
applications ke liye*/



// iske hi through hm server side web application bnate hai 
// sabse pahle to express install krna hoga
const express=require("express")
const app =express()

// console.dir(app)
// aise to express ko require kr liya first work is done 

// now ab hm express ke use case 1 hai help for incomming request
let port =3000//app .listen ke andr dalna hota hai isliye
app.listen(port,()=>{
    console.log("app listen on port",port)
})
// ye baar ye krne ke baad server ko rokne ke liye control c

// request ja rhi ki nhi ye sb to tb check kroge na tb server start 
// hoga simple hai bs file run krwa do (terminal se krwa dena)
