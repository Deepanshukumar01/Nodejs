/*GET = data lena
GET Request

GET request ka use server se data fetch karne ke liye hota hai.
Isme data URL me send hota hai (query string), isliye visible hota hai.
Data size limited hota hai aur ye generally safe hota hai (server data change nahi karta).


POST = data bhejna
POST Request

POST request ka use server ko data bhejne (create/update) ke liye hota hai.
Isme data request body me jata hai, URL me visible nahi hota.
Ye large data aur sensitive data bhejne ke liye better hota hai.

*/

let express =require("express")
const app=express()
const port=3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/register",(req,res)=>{
    // dekho get se data to hm le lete hai by res.params se
    let {user , pass}=req.query
    res.send(`<h1>welcome back ${user}</h1>`)
    
})
app.post("/register",(req,res)=>{
    /*isme data direct url se access nhi hota body se hota hai
    isme data hota hai req.body mei pr express direct use 
    read nhi kr pati hai to uske liye express.unlencoded or json use
    ya simple words middle bares use krte hai 
    agr middle bares use nhi kroge to undifined dena*/
    let {user , pass}=req.body
    res.send(`<h1>welcome back ${user}</h1>`)
})

app.listen(port,()=>{
    console.log(`listen the port ${port}`)
})




