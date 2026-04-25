let express=require("express")
const app=express()
const path=require("path")

let port=3000
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"../views"))

app.get("/id/:username",(req,res)=>{
    const follower=["deep","avneesh","arjun","harshit","abhi"]
    let {username}=req.params
    res.render("insta.ejs",{username,follower})
})
app.use((req,res)=>{
    res.send("<h1>shi url do</h1>")
})

app.listen(3000,()=>{
    console.log("listen on port 3000")
})