// topic 1 
/*template to ek general layout of screen smj lo like insta profile sabhi 
ke liye ala alg to bnayi nhi hogi

hr baar package mannul create ke liye shortcut hai 
npm init -y

or nodeejs package ko install ke liye 
npm i ejs

or ha idr hmne ejs package local mei install kiya fir bhi isko 
require krne ki need nhi automatic express se require ho gyi 
or ha global package to bese bhi require krne ki need nhi hai*/ 


//topic 2
/*hm ejs ki help se send nhi krte render krte hai 
jaise previous mei hm res.send 
isme res.ren kyo isme hme large file hi direct bhej skte hai 
or ha isme hm normal file nhi ejs file bhejte hai*/


//topic 3
/*dekho ek aata hai path ka concept because by default
agr file or view same directory mei to nhi use 
agr different mei to ye use krna hoga
simple word agr folder nodejs se run kroge to path use
agr nodeejs se kr rhe to nhi  
abhi ke liye ye smjo nodejs se run kr rhe hai*/


//topic 4 interpolation syntax
/*"string ke andar variable dalna = interpolation" 
ex <h1>Hello <%= name %></h1>
ejs mei ye use hota hai or ha isse html dynamic bn jati hai */

//topic 5 passing data to ejs

//topic 6 
/*conditional statement kaise pass krte hai ejs mei */

let express=require("express")
const app=express()
const path=require("path")

const port =3000

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"../views"))
//ye dirname means path hai complete like nodejs/1/1.js kiya to nodeejs/1 mltb 
// dir tk fir us file re releated path ke liye ..view ya jo bhi ho 


app.get("/", (req,res)=>{
    res.render("home.ejs")//ya to sirf home likho tb bhi chalega
})
app.get("/diceroll", (req,res)=>{
    let diceroll=Math.floor(Math.random()*6)+1
    res.render("dice.ejs",{diceroll})//ya to sirf home likho tb bhi chalega
})

app.get("/care", (req,res)=>{
    res.send("i don't care")
})
app.listen(3000,()=>{
    console.log("listen on port 3000")
})