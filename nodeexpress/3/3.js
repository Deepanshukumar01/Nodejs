// ab dekho agr response bhejna ho to kaise bhejte hai (pr pahle request
// send hogi app.listen se)  by app.use se 

// hoppscotch se bhi request bheji ja sakti hai 


const express=require("express")
const app =express()

let port =3000
app.listen(port,()=>{
    console.log("app listen on port",port)
})

//  ab hm dekhte hai request aa gyi to hme kya krna hai

/*app.use((req,res)=>{
    // console.log(req)
    console.log("request received")//ye to bs hme hi terminal pe show hoga
    res.send(
        "<h1>deepanshu</h1>"// yha kuch bhi obj string jo chaho
    )// ye hai topic 4 ka isme actual mei response show hoga web page pe
})*/

// topic 5 routing jaise ki amazon/home ye aise type ka 
/* app.use mei problem ye hai ki kuch bhi route ho same hi result dega
pr real world mei aisa nhi hota hai jaise amazon/feature mei alg ho 
amazon/home pe alg ho aise kaam krti hai real scene mei*/

app.get("/",(req,res)=>{       // ye dekho / ye to by default home wala hi show krega mean amazon or amazon/ ek hi hai
    res.send("you contact home page")
})
app.get("/care",(req,res)=>{ 
    res.send("you contact care page")     
})
app.get("/payment",(req,res)=>{     
    res.send("you contact payment page") 
})
app.post("/",(req,res)=>{
    res.send("you use post this time")
})
app.use((req,res)=>{    // ye last mei use krna   //ye wala jruri hai man lo user /k krne lge to ye to hmne banaya hi nhi to esko handle krne ke liye bs order ye hi ho last mei ho ye
    res.send("this page is not exit")
})

