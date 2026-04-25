let express=require("express")
const app=express()
const path=require("path")

let port=3000
//topic 11
app.use(express.static(path.join(__dirname,"/public")))
/*sirf html hi nhi css or js bhi hm add kr sakte hai bs 
directiory concept iska bhi same path ki tarah kaam krta hai  */

//topic 12 
// aisa template jo sabhi file mei use kro to includes use
// in .ejs file example


app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/:username",(req,res)=>{
    let {username}=req.params
    const instadata=require("./data.json")
    const data=instadata[username]

    if(data){
        res.render("instagram.ejs",{data})
    }
    else{
        res.render("error.ejs")
    }
})
app.use((req,res)=>{
    res.send("<h1>shi url do</h1>")
})
app.listen(3000,()=>{
    console.log("listen on port 3000")
})