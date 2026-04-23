/* abhi tk ye problem aa rhi thi ki minor change bhi code mei 
krne server stop and restart krna pd rha tha means file dobara
 run krna pd rha tha
 iske liye hm nodemon package global install krna or 
 ha fir file run hoge nodemon filename*/

/* next topic 7
path parameter dynamic valye like hr ek ke liye to hm app.get nhi krege na */
const express = require("express")
const app = express()

let port = 3000
app.listen(port, () => {
    console.log("app listen on port", port)
})
app.get("/", (req, res) => {
    res.send("you contact home page")
})
app.get("/care", (req, res) => {
    res.send("you contact care page")
})
app.get("/payment", (req, res) => {
    res.send("you contact payment page")
})
app.post("/", (req, res) => {
    res.send("you use post this time")
})
// ye hai 7 ka 
app.get("/:username/:password", (req, res) => {
    // console.log(req.params)// isse hme username or password mil jayega fir hm usko use kr sakte hai
    let { username, password } = req.params
    res.send(`welcome ${username} and i know your password ${password}`)// " "  " "ye sb nhi hoga idr isme 1 string mei hi bhejna hoga
})
// ye hai 8 ka 
/* query string jo website pe hoti hai google.com/search?q=apple&banana ye*/
app.get("/search", (req, res) => {
    //console.log(req.query)//ye hai bo 
    let {q}=req.query
    res.send(`search result for the ${q}`)
})


app.use((req, res) => {
    res.send("this page is not exit")
})

